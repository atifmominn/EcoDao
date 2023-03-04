import { ConnectWallet, useAddress, useContract, useBalance, useTokenBalance } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { ThirdwebSDK, NATIVE_TOKEN_ADDRESS  } from "@thirdweb-dev/sdk";
import { useSDK, useContractWrite } from "@thirdweb-dev/react";
import { GiMaterialsScience, GiMoneyStack } from "react-icons/gi";
import { BiNetworkChart } from "react-icons/bi";
import { RiGovernmentFill, RiPlantFill } from "react-icons/ri";
import { IoPeopleCircleSharp, IoLogoTwitter } from "react-icons/io5";
import { GiBubblingFlask } from "react-icons/gi";
import myABI from "./myABI.json";
import { Web3Button } from "@thirdweb-dev/react";
import React, { useState, useEffect } from 'react';
import TiSocialTwitter from "react-icons/ti"


const cors = require("cors");

export default function Home() {
  return (
    <>
      <Header></Header>
      <Body></Body>
      <Quote></Quote>
    </>
  );
}

function Header() {
  return (
    <> 
      <div id="top" className="absolute top-0"></div>
      <div className="z-10 top-0 w-full h-[6rem] p-6 fixed backdrop-blur-[2px] flex justify-center">
        <div className="flex-none mt-1 mr-5">
          <h1 className="text-white font-bold text-4xl text-center sm:text-left"><a href="#top">Eco<span className="text-lime-green">DAO</span></a></h1>
        </div>
        
        <li className="text-white font-medium hidden px-4 sm:text-xl mt-2 sm:flex w-0 text-[1px] sm:w-[800px] shrink justify-center gap-40">
          <ul className="hover:text-titleColor shrink hover:text-lime-green duration-300"><a href="https://demo.snapshot.org/#/ecosus.eth">App</a></ul>
          <ul className="hover:text-titleColor shrink hover:text-lime-green duration-300"><a href="#mint">Buy ECO</a></ul>
        </li>
        
        <div id="about" className="flex-none group ml-5">
          <ConnectWallet className="w-48 text-white font-bold text-xl bg-black/50 p-3 rounded-2xl group-hover:bg-lime-green duration-300"></ConnectWallet>
       </div>
      </div>
    </>
  );
}

function Body() {
  return(
    <>
      <div className="relative select-none">
        <div className="w-5/6 h-auto bg-white mt-40 mx-auto rounded-3xl">
          <img className="h-auto mx-auto rounded-3xl w-full" src="https://media.discordapp.net/attachments/1028779688178495548/1081585485404721324/Screen_Shot_2023-03-04_at_8.34.29_AM.png?width=2206&height=887" ></img>
          <h1 className="absolute text-white border-white left-0 right-0 top-0 bottom-0 my-auto mx-auto w-1/2 h-1/2 text-xl font-bold text-center 2xl:text-7xl 2xl:h-[200px] 2xl:w-[1000px] xl:text-6xl xl:pt-10 lg:text-5xl lg:pt-2 md:text-4xl md:pt-4 sm:text-3xl sm:pt-4">Empowering change for a brighter, greener future.</h1>
        </div>
      </div>
      <Features></Features>
      <Mint></Mint>
    </>
  );
}

function Features() {
  return(
    <>
      <div className="flex w-5/6 h-auto mt-32 mx-auto rounded-3xl gap-8 flex-wrap justify-center ">
        <div className="w-[550px] h-[400px] bg-jet rounded-3xl text-eerie-black text-5xl font-bold p-8 relative">
          <h1 className="text-white">R&D</h1>
          <p className="text-white mt-4 text-3xl font-medium">Securing a sustainable future through research and innovation.</p>
          <GiBubblingFlask className="text-[150px] text-lime-green absolute bottom-4 right-8"></GiBubblingFlask>
        </div>
        <div className="w-[550px] h-[400px] bg-jet rounded-3xl text-eerie-black text-5xl font-bold p-8 relative">
          <h1 className="text-white">Grants & Investments</h1>
          <p className="text-white mt-4 text-3xl font-medium">Empowering eco-friendly startups through community-driven funding.</p>
          <GiMoneyStack className="text-[150px] text-lime-green absolute bottom-4 right-8"></GiMoneyStack>
        </div>
        <div className="w-[550px] h-[400px] bg-jet rounded-3xl text-eerie-black text-5xl font-bold p-8 relative">
          <h1 className="text-white">Decentralized Governance</h1>
          <p className="text-white mt-4 text-3xl font-medium">Egalitarian community-driven decision-making</p>
          <BiNetworkChart className="text-[150px] text-lime-green absolute bottom-4 right-8"></BiNetworkChart>
        </div>
        <div className="w-[550px] h-[400px] bg-jet rounded-3xl text-eerie-black text-5xl font-bold p-8 relative">
          <h1 className="text-white">Political Lobbying</h1>
          <p className="text-white mt-4 text-3xl font-medium">Advocating for green policies to effectuate lasting change.</p>
          <RiGovernmentFill className="text-[150px] text-lime-green absolute bottom-4 right-8"></RiGovernmentFill>
        </div>
        <div className="w-[550px] h-[400px] bg-jet rounded-3xl text-eerie-black text-5xl font-bold p-8 relative">
          <h1 className="text-white">Community Events</h1>
          <p className="text-white mt-4 text-3xl font-medium">Building a sustainable community through education, engineering, and inclusion.</p>
          <IoPeopleCircleSharp className="text-[150px] text-lime-green absolute bottom-2 right-8"></IoPeopleCircleSharp>
        </div>
        <div className="w-[550px] h-[400px] bg-jet rounded-3xl text-eerie-black text-5xl font-bold p-8 relative">
          <h1 className="text-white">Carbon Negativity</h1>
          <p className="text-white mt-4 text-3xl font-medium">Negating our carbon footpring on Polygon.</p>
          <RiPlantFill className="text-[150px] text-lime-green absolute bottom-4 right-8"></RiPlantFill>
        </div>
      </div>
      <div id="mint"></div>
  </>
  );
}


const contractAddress = '0xC9881fbCE32A4d429aa268D7E1d4bE07F5C70860';
const contractAbi = myABI;


function Mint() {

  // const walletAddress = useAddress();
  // const { contract } = useContract(contractAddress, "ECO");
  // const { data, isLoading, error } = useTokenBalance(contract, walletAddress);
  // const handleCheck = () => {
  //   console.log(isLoading);
  //   console.log(data.name);
  // };
  
  // const sdk = useSDK();
  // const contract = sdk.getContractFromAbi(
  // "{0xb5d19e2d476bcfD944c910b43Db8BE674a9489f9}",
  // // Pass in the "abi" field from the JSON file
  // myABI.abi
  // );
  // const { mutateAsync: myFunctionAsync } = useContractWrite(contract, "mint");
  // const tx = await myFunctionAsync([]); // Call the function
  
  return(
    <>
      <div className="flex w-5/6 h-80 mt-16 mx-auto rounded-3xl gap-8 flex-wrap justify-center">
        <div className="w-full h-auto bg-jet rounded-3xl sm:w-10/12 flex flex-col justify-center gap-11 items-center bg-[url('/Users/atifmomin/Downloads/EcoDao-main/public/ocean.jpeg')]">
          <div className="text-white text-6xl font-bold">ECO Token</div>
          <div className="text-xl">Fungible governance token for EcoDAO</div>
          <button className="text-white text-3xl w-[200px] h-[50px] bg-black/50 hover:bg-sky-400 duration-300 rounded-xl font-semibold">
          <Web3Button
            className="nostyle"
            contractAddress={contractAddress}
            contractAbi={contractAbi}
            btnTitle="Mint"
            // Call the name of your smart contract function
            action={(contract) => contract.call("mint")}
          >
            Mint
          </Web3Button>

          </button> 
          
        </div> 
      </div>

      <div className="flex w-5/6 h-80 mt-16 mx-auto rounded-3xl gap-8 flex-wrap justify-center mb-[-140px]">
        <div className="w-full h-auto bg-jet rounded-3xl sm:w-10/12 flex flex-col justify-center gap-11 items-center bg-[url('https://media.discordapp.net/attachments/1028779688178495548/1081572562162700348/Screen_Shot_2023-03-04_at_7.43.10_AM.png')]">
          <div className="text-white text-6xl font-bold">Get Involved</div>
          <div className="text-xl">The future of the planet is in your hands. Vote Now.</div>
          <button className="text-white text-3xl w-[200px] h-[50px] bg-black/50 hover:bg-orange-500 duration-300 rounded-xl font-semibold focus:outline focus:outline-offset-2 focus:outline-2 focus:duration-0"><a target="_blank" href="https://demo.snapshot.org/#/ecosus.eth">Vote</a></button>
        </div> 
      </div>

    </>
  );
}


function Quote() {
  const [currentQuote, setCurrentQuote] = useState('');
  const [currentAuthor, setCurrentAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  function fetchQuote(){
    fetch('https://stoicquotesapi.com/v1/api/quotes/random')
        .then(response => response.json())
        .then((json) => {
            setCurrentQuote(json.body);
            setCurrentAuthor(json.author);
        })   
  }

  function chooseQuote() {
    fetchQuote();
  }

  function tweet() {
    let value = "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + currentQuote + '" ' + "- " + currentAuthor);
    document.getElementById("tweet-quote").setAttribute("href", value);
  }

  function goUp () {
    const para = document.createElement("i");
    para.className="fa-solid fa-heart";
    para.setAttribute("id","flow");
    document.getElementById("heart-group").appendChild(para);
  }

  return (
    <>
      <div id="wrapper" className="bg-jet flex w-4/6 h-auto mt-16 mx-auto rounded-3xl gap-8 flex-wrap justify-center pt-11">
        <div id="quote-box" className="font-semibold">
            <div id="text"><span id="quo" className="left">"</span><span id="actual-text">{currentQuote}</span><span id="quo" className="right">"</span></div>
            <div id="author">- <span id="actual-author">{currentAuthor}</span></div>
            <div id="holder">
              <button id="new-quote" className="rounded-3xl bg-lime-green hover:bg-white hover:text-lime-green duration-300" onClick={chooseQuote}>New Quote</button>
              <div id="tweart">
                <a id="tweet-quote" target="_blank" onClick={tweet} href="#"><IoLogoTwitter className="mt-[-60px] text-[50px] rounded-lg w-16 h-16 p-4 bg-lime-green hover:bg-white hover:text-lime-green duration-300"></IoLogoTwitter></a>
                <button id="heart" onClick={goUp}><i className="fa-solid fa-heart"></i></button>
                <div id="heart-group" onClick={goUp}></div>
              </div>
            </div>
        </div>
      </div>
      <h1 className="text-white font-bold text-4xl text-center mx-auto mt-16"><a href="#top">Eco<span className="text-lime-green">DAO</span></a></h1>
      <div className="mb-[40px]"></div>
    </>
  );
}
