import React, { useState, useEffect } from "react";
import "./hero.css";
import eth from "../../../../public/ETH.svg";
import usdt from "../../../../public/usdt.svg";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
//import WalletConnectProvider from "@walletconnect/web3-provider";
import { abi, address } from "../../../../contract";
import {
  selectedStyle,
  unSelectedStyle,
  pSelectedStyle,
  pUnSelectedStyle,
} from "./styles";
import Web3 from "web3";
import { usdtAbi, usdtAddress } from "../../../../usdt";

const Hero = () => {
  const [seconds, setSeconds] = useState(10000000);
  const [ethValue, setEthValue] = useState("");
  const [tokenValue, setTokenValue] = useState("");
  const [payway, setPayway] = useState("eth");
  const [isConnected, setIsconnected] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  function changeToEther() {
    setPayway("eth");
    setTokenValue(0);
    setEthValue(0);
    console.log(payway);
  }

  function changeToUsdt() {
    setPayway("usdt");
    setEthValue(0);
    setTokenValue(0);
    console.log(payway);
  }
  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Sync inputs
  async function syncInputs(event) {
    const { id, value } = event.target;
    const ethPrice = await getEthUsdtPrice();

    if (id === "eth") {
      console.log("ETH Value:", value);
      payway === "usdt"
        ? setTokenValue(roundToDecimal(value, 1))
        : setTokenValue(roundToDecimal(value * ethPrice, 1));
      setEthValue(value);
    } else if (id === "token") {
      console.log("Token Value:", value);
      payway === "usdt"
        ? setEthValue(roundToDecimal(value, 2))
        : setEthValue(roundToDecimal(value / ethPrice, 4));
      setTokenValue(value);
    }
  }

  function changeCheck() {
    setIsChecked(!isChecked);
  }

  function roundToDecimal(num, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
  }

  async function getEthUsdtPrice() {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,tether&vs_currencies=usd"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      const ethPriceInUsd = data.ethereum.usd;

      return ethPriceInUsd;
    } catch (error) {
      console.error("Error fetching price:", error);
    }
  }

  async function connect() {
    let web3Modal;

    //wallet connect option
    const providerOptions = {
      // walletconnect: {
      //   package: WalletConnectProvider, // required
      //   options: {
      //     rpc: { 1: process.env.NEXT_PUBLIC_RPC_URL }, // required
      //   },
      // },
    };

    if (typeof window !== "undefined") {
      web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions, // required
      });
    }
    const web3ModalProvider = await web3Modal.connect(); //connect to wallet
    setIsconnected(!isConnected);
  }

  async function buyToken() {
    let web3 = new Web3(window.ethereum);
    try {
      const accounts = await web3.eth.getAccounts();
      const contract = new web3.eth.Contract(abi, address);
      const USDTContract = new web3.eth.Contract(usdtAbi, usdtAddress);
      payway === "eth"
        ? await contract.methods
            .buyTokensWithEther()
            .send({ from: accounts[0], value: BigInt(ethValue * 1e18) })
        : (await USDTContract.methods
            .approve(address, ethValue * 1e18)
            .send({ from: accounts[0] }),
          await contract.methods
            .buyTokensWithUSDT(ethValue)
            .send({ from: accounts[0] }));
    } catch (e) {
      console.error("Execute Contract: ", e);
    }
  }

  return (
    <div className="hero container">
      <div className="box">
        <div className="description">
          <p className="BUY-NOW-BEFOR-PRICE-RISE">BUY NOW BEFOR PRICE RISE</p>
          <div className="countdown">
            <div className="days-c">
              <p>DAYS</p>
              <div className="days">{Math.round(seconds / 86400)}</div>
            </div>
            <div className="hours-c">
              <p>HOURS</p>
              <div className="hours">
                {Math.round((seconds % 86400) / 3600)}
              </div>
            </div>
            <div className="minuts">
              <p>MINUTS</p>
              <div className="minuts">{Math.round((seconds % 3600) / 60)}</div>
            </div>
            <div className="seconds">
              <p>SECONDS</p>
              <div className="seconds">{Math.round(seconds % 60)}</div>
            </div>
          </div>
          <p className="usdt-raised">USDT RAISED:</p>
          <p className="price">1 TOKEN = $1</p>
        </div>
        <div className="buttons">
          <div className="payment-way">
            <button
              className="eth"
              id="eth"
              style={payway === "eth" ? selectedStyle : unSelectedStyle}
              onClick={changeToEther}
            >
              <img src={eth} alt="ETH" onClick={changeToEther} />
              <p
                onClick={changeToEther}
                style={payway === "eth" ? pSelectedStyle : pUnSelectedStyle}
              >
                ETH
              </p>
            </button>
            <button
              className="usdt"
              id="usdt"
              style={payway === "usdt" ? selectedStyle : unSelectedStyle}
              onClick={changeToUsdt}
            >
              <img src={usdt} alt="USDT" onClick={changeToUsdt} />
              <p
                onClick={changeToUsdt}
                style={payway === "usdt" ? pSelectedStyle : pUnSelectedStyle}
              >
                USDT
              </p>
            </button>
          </div>
          <div className="input">
            <div className="pay">
              <p className="eth-you-pay">
                {payway === "eth" ? "ETH you pay" : "USDT you pay"}
              </p>
              <input
                type="number"
                className="eth-input"
                placeholder="0"
                id="eth"
                value={ethValue}
                onInput={(e) => {
                  console.log("ETH Input Changed", e.value);
                  syncInputs(e);
                }}
              />
              <img
                src={
                  payway === "eth"
                    ? "../../../../public/ETH.svg"
                    : "../../../../public/usdt.svg"
                }
              />
            </div>
            <div className="receive">
              <p className="you-receive">Token you receive</p>
              <input
                type="number"
                className="receive-input"
                placeholder="0"
                id="token"
                value={tokenValue}
                onInput={(e) => {
                  console.log("Token Input Changed");
                  syncInputs(e);
                }}
              />
            </div>
          </div>
          {isConnected ? (
            <div className="connect-wallet-container">
              <p className="connect-wallet-p">
                Please ensure that you have at least 0.015 ETH to
              </p>
              <div className="gift-div">
                <p className="gift-code">I have gift code</p>{" "}
                <input
                  type="checkbox"
                  className="check-mark"
                  onChange={changeCheck}
                />
              </div>
              {isChecked ? <input type="text" className="gift-input" /> : <></>}
              <button className="buy" onClick={buyToken}>
                BUY NOW
              </button>
            </div>
          ) : (
            <div className="connect-wallet-container">
              <button className="connect-wallet" onClick={connect}>
                CONNECT WALLET
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
