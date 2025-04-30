import {React, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landingpage/home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import HomePage from "./landing_page/home/HomePage";
import Signup from "./landingpage/signup/Signup";
import About from "./landingpage/about/AboutPage";
import ProductPage from "./landingpage/products/ProductPage";
import Pricingpage from "./landingpage/pricing/Pricingpage";
import SupportPage from "./landingpage/support/SupportPage";
import NotFound from "./landingpage/NotFound";
import Navbar from "./landingpage/Navbar";
import Footer from "./landingpage/Footer";
import Login from "./landingpage/signup/Login";
import Funds from "./components/Funds";
import Holdings from "./components/Holdings";
import Orders from "./components/Orders";
import Positions from "./components/Positions";
import Summary from "./components//Summary";
import WatchList from "./components/WatchList";
import { GeneralContextProvider } from "./components/GeneralContext";
import Dashboard from './components/Dashboard';

// axios
//   .get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`)
//   .then((res) => {
//     console.log("Current Price:", res.data.c);  // c = current price
//   })
//   .catch((err) => console.error(err));


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        if (token) {
          setIsLoggedIn(true);
        }
      }, []);
    return (
        <BrowserRouter>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
                <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/pricing" element={<Pricingpage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/*" element={< Dashboard />} />
            </Routes>
            {/* <GeneralContextProvider>
                      <div className="dashboard-container">
                        <WatchList />
                        <div className="content">
                          <Routes>
                            <Route exact path="/" element={<Summary />} />
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/holdings" element={<Holdings />} />
                            <Route path="/positions" element={<Positions />} />
                            <Route path="/funds" element={<Funds />} />
                            
                          </Routes>
                        </div>
                      </div>
                    </GeneralContextProvider> */}
            <Footer />
        </BrowserRouter>
    )
}


export default App;






const sensex30 = [
  "RELIANCE",
  "TCS",
  "HDFCBANK",
  "ICICIBANK",
  "INFY",
  "HINDUNILVR",
  "ITC",
  "KOTAKBANK",
  "LT",
  "SBIN",
  "AXISBANK",
  "BHARTIARTL",
  "ASIANPAINT",
  "BAJFINANCE",
  "HCLTECH",
  "SUNPHARMA",
  "MARUTI",
  "POWERGRID",
  "TITAN",
  "TECHM",
  "BAJAJFINSV",
  "NTPC",
  "NESTLEIND",
  "ULTRACEMCO",
  "TATAMOTORS",
  "WIPRO",
  "TATASTEEL",
  "JSWSTEEL",
  "INDUSINDBK",
  "M&M"
];








// const nifty50 = [
//   "ADANIPORTS",
//   "ASIANPAINT",
//   "AXISBANK",
//   "BAJAJ-AUTO",
//   "BAJFINANCE",
//   "BAJAJFINSV",
//   "BPCL",
//   "BHARTIARTL",
//   "BRITANNIA",
//   "CIPLA",
//   "COALINDIA",
//   "DIVISLAB",
//   "DRREDDY",
//   "EICHERMOT",
//   "GRASIM",
//   "HCLTECH",
//   "HDFCBANK",
//   "HDFCLIFE",
//   "HEROMOTOCO",
//   "HINDALCO",
//   "HINDUNILVR",
//   "ICICIBANK",
//   "ITC",
//   "INDUSINDBK",
//   "INFY",
//   "JSWSTEEL",
//   "KOTAKBANK",
//   "LT",
//   "M&M",
//   "MARUTI",
//   "NESTLEIND",
//   "NTPC",
//   "ONGC",
//   "POWERGRID",
//   "RELIANCE",
//   "SBILIFE",
//   "SBIN",
//   "SUNPHARMA",
//   "TCS",
//   "TATACONSUM",
//   "TATAMOTORS",
//   "TATASTEEL",
//   "TECHM",
//   "TITAN",
//   "UPL",
//   "ULTRACEMCO",
//   "WIPRO",
//   "BAJAJHLDNG", // sometimes seen as a replacement
//   "ADANIENT"
// ];

const nifty50Symbols = [
  "ADANIENT",
  "ADANIPORTS",
  "APOLLOHOSP",
  "ASIANPAINT",
  "AXISBANK",
  "BAJAJ-AUTO",
  "BAJFINANCE",
  "BAJAJFINSV",
  "BEL",
  "BHARTIARTL",
  "CIPLA",
  "COALINDIA",
  "DRREDDY",
  "EICHERMOT",
  "GRASIM",
  "HCLTECH",
  "HDFCBANK",
  "HDFCLIFE",
  "HEROMOTOCO",
  "HINDALCO",
  "HINDUNILVR",
  "ICICIBANK",
  "INDUSINDBK",
  "INFY",
  "ITC",
  "JIOFIN",
  "JSWSTEEL",
  "KOTAKBANK",
  "LT",
  "M&M",
  "MARUTI",
  "NESTLEIND",
  "NTPC",
  "ONGC",
  "POWERGRID",
  "RELIANCE",
  "SBILIFE",
  "SHRIRAMFIN",
  "SBIN",
  "SUNPHARMA",
  "TCS",
  "TATACONSUM",
  "TATAMOTORS",
  "TATASTEEL",
  "TECHM",
  "TITAN",
  "TRENT",
  "ULTRACEMCO",
  "WIPRO",
  "ZOMATO"
];

