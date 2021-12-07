import "./App.css";
import {
  AiOutlineHome,
  AiOutlineStock,
  AiOutlineTag,
  AiOutlineNotification,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import {
  FiSearch,
  FiSettings,
  FiGithub,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiDribbble,
} from "react-icons/fi";
import { FaLessThan } from "react-icons/fa";
import { IconContext } from "react-icons";
import { TiMessages } from "react-icons/ti";
import { BsCash, BsEmojiExpressionless } from "react-icons/bs";
import { SiFuturelearn } from "react-icons/si";
import { MdOutlineInventory } from "react-icons/md";
import { LineChart } from "./LineChart";
import { DonughtChart } from "./DonughtChart";
import Avatar from "./man.png";
import logo from "./logo.png";
import { Table } from "./Table";

function App() {
  return (
    <div className="App text-white font-sans">
      {/* NAVIGATION */}
      <IconContext.Provider value={{ color: "White" }}>
        <nav className="fixed bg-gray-600 h-full w-80 flex flex-col">
          <div className="flex items-center h-40 w-auto ">
            <img src={logo} alt="logo" className="w-3/5 mx-auto" />
          </div>
          <div className="h-20 flex items-center text-xs ml-8 my-0 p-0">
            <h3 className="text-gray-400 ">MENU</h3>
          </div>

          <div>
            <div className="flex items-center text-left ml-8 mb-5">
              <AiOutlineHome size="1.5em" />
              <p className="pl-5">Home</p>
            </div>
            <div className="flex items-center text-left ml-8 mb-5">
              <AiOutlineTag size="1.5em" />
              <p className="pl-5">Products</p>
            </div>
            <div className="flex items-center text-left ml-8 mb-5">
              <AiOutlineStock size="1.5em" />
              <p className="pl-5">Metrics</p>
            </div>
            <div className="flex items-center text-left ml-8 mb-5">
              <TiMessages size="1.5em" />
              <p className="pl-5">Messages</p>
            </div>
            <div className="flex items-center text-left ml-8 mb-5">
              <MdOutlineInventory size="1.5em" />
              <p className="pl-5">Inventory</p>
            </div>
            <div className="h-20 flex items-center text-xs ml-8">
              <h3 className="text-gray-400 ">SALES</h3>
            </div>
            <div className="flex items-center text-left ml-8 mb-5">
              <BsCash size="1.5em" />
              <p className="pl-5">Revenue</p>
            </div>
            <div className="flex items-center text-left ml-8 mb-5">
              <BsEmojiExpressionless size="1.5em" />
              <p className="pl-5">Expenses</p>
            </div>
            <div className="flex items-center text-left ml-8 mb-5">
              <FaLessThan size="1.5em" />
              <p className="pl-5">Discounts</p>
            </div>
            <div className="flex items-center text-left ml-8 mb-5">
              <SiFuturelearn size="1.5em" />
              <p className="pl-5">Forecasts</p>
            </div>
          </div>
        </nav>

        {/* HEADER */}
        <header className="bg-gray-800 w-auto h-20 flex justify-end">
          <div className="flex p-6">
            <AiOutlineNotification
              className="mx-4 p-1 cursor-pointer transform hover:scale-150"
              size="2em"
            />
            <FiSettings
              className="mx-4 p-1 cursor-pointer transform hover:scale-150"
              size="2em"
            />
            <FiSearch
              className="mx-4 p-1 cursor-pointer transform hover:scale-150"
              size="2em"
            />
            <img className="mx-4" src={Avatar} alt="Avatar" />
          </div>
        </header>
      </IconContext.Provider>

      <div className="h-screen w-auto bg-gray-800 ml-80">
        <div>
          <h1 className="block text-left text-4xl pl-12">Dashboard</h1>
        </div>

        {/* HERO */}
        <div className="flex w-9/10 mx-0 px-0 justify-start">
          {/* SMALL CARDS */}
          <div className="flex w-96 flex-wrap ">
            <IconContext.Provider value={{ color: "Green" }}>
              <div className="flex flex-col justify-evenly filter drop-shadow-xl rounded bg-opacity-870 bg-gray-600 w-60 h-40 ml-12 mt-10 px-5 py-10">
                <h3 className="text-left text-2xl font-light">Customers</h3>
                <h2 className="text-left text-4xl">45,320</h2>
                <div className="flex items-center">
                  <AiOutlineArrowUp />
                  <p className="text-green-700 pl-2">5.25%</p>
                </div>
                <p className="font-extralight text-left text-gray-400">
                  Since last month
                </p>
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "red" }}>
              <div className="flex flex-col justify-evenly filter drop-shadow-xl rounded bg-opacity-870 bg-gray-600 w-60 h-40 ml-12 mt-10 px-5 py-10">
                <h3 className="text-left text-2xl font-light">Orders</h3>
                <h2 className="text-left text-4xl">2,112</h2>
                <div className="flex items-center">
                  <AiOutlineArrowDown />
                  <p className="text-red-700 pl-2">1.01%</p>
                </div>
                <p className="font-extralight text-left text-gray-400">
                  Since last month
                </p>
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "red" }}>
              <div className="flex flex-col justify-evenly filter drop-shadow-xl rounded bg-opacity-870 bg-gray-600 w-60 h-40 ml-12 mt-10 px-5 py-10">
                <h3 className="text-left text-2xl font-light">Earnings</h3>
                <h2 className="text-left text-4xl">£10,524</h2>
                <div className="flex items-center">
                  <AiOutlineArrowDown />
                  <p className="text-red-700 pl-2">3.41%</p>
                </div>
                <p className="font-extralight text-left text-gray-400">
                  Since last month
                </p>
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "Green" }}>
              <div className="flex flex-col justify-evenly filter drop-shadow-xl rounded bg-opacity-870 bg-gray-600 w-60 h-40 ml-12 mt-10 px-5 py-10">
                <h3 className="text-left text-2xl font-light">Growth</h3>
                <h2 className="text-left text-4xl">+ 29.45%</h2>
                <div className="flex items-center">
                  <AiOutlineArrowUp />
                  <p className="text-green-700 pl-2">2.15%</p>
                </div>
                <p className="font-extralight text-left text-gray-400">
                  Since last month
                </p>
              </div>
            </IconContext.Provider>
          </div>

          {/* BIG CARD */}
          <div className="flex flex-col bg-gray-600 mt-10 rounded filter drop-shadow-xl py-10 w-3/5 px-5 min-w-max">
            <h2 className="text-4xl text-left font-extralight mb-10">
              Revenue
            </h2>
            <LineChart className="" />
          </div>
        </div>

        {/* 2nd SECTION */}

        <section className="flex w-9/10 mx-0 px-0 justify-start h-2/4 bg-gray-800 pt-10 ">
          <div className="ml-12 bg-gray-600 p-5 rounded filter drop-shadow-xl h-min">
            <h3 className="my-2">Customer by spend</h3>
            <Table className="" />
          </div>

        <div className="ml-5 bg-gray-600 p-5 rounded filter drop-shadow-xl h-min w-min flex items-center">
        <DonughtChart/>
        <DonughtChart/>

        </div>
        </section>
      

        <footer className="bg-gray-800 w-auto h-40 flex items-center">
          <div className="w-1/2 text-left mx-12 text-gray-500">
            <p>This website is a non-functional dashboard built using React, Tailwind and ChartJs.</p>
          </div>
          <div className="flex w-1/2 justify-end p-10 items-center">
            <FiTwitter size="1.5em" className="mx-4 cursor-pointer"/>
            <FiFacebook size="1.5em" className="mx-4 cursor-pointer"/>
            <FiInstagram size="1.5em" className="mx-4 cursor-pointer"/>
            <FiDribbble size="1.5em" className="mx-4 cursor-pointer"/>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
