// import React, { useState, useContext } from "react";

// import axios from "axios";

// import GeneralContext from "./GeneralContext";

// import { Tooltip, Grow } from "@mui/material";

// import {
//   BarChartOutlined,
//   KeyboardArrowDown,
//   KeyboardArrowUp,
//   MoreHoriz,
// } from "@mui/icons-material";

// import { watchlist } from "../data/data";
// import { DoughnutChart } from "./DoughnoutChart";

// const labels = watchlist.map((subArray) => subArray["name"]);

// const WatchList = () => {
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Price",
//         data: watchlist.map((stock) => stock.price),
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.5)",
//           "rgba(54, 162, 235, 0.5)",
//           "rgba(255, 206, 86, 0.5)",
//           "rgba(75, 192, 192, 0.5)",
//           "rgba(153, 102, 255, 0.5)",
//           "rgba(255, 159, 64, 0.5)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="watchlist-container">
//       <div className="search-container">
//         <input
//           type="text"
//           name="search"
//           id="search"
//           placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
//           className="search"
//         />
//         <span className="counts"> {watchlist.length} / 50</span>
//       </div>

//       <ul className="list">
//         {watchlist.map((stock, index) => {
//           return <WatchListItem stock={stock} key={index} />;
//         })}
//       </ul>

//       <DoughnutChart data={data} />
//     </div>
//   );
// };




// export default WatchList;

// const WatchListItem = ({ stock }) => {
//   const [showWatchlistActions, setShowWatchlistActions] = useState(false);

//   const handleMouseEnter = (e) => {
//     setShowWatchlistActions(true);
//   };

//   const handleMouseLeave = (e) => {
//     setShowWatchlistActions(false);
//   };

//   return (
//     <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <div className="item">
//         <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
//         <div className="itemInfo">
//           <span className="percent">{stock.percent}</span>
//           {stock.isDown ? (
//             <KeyboardArrowDown className="down" />
//           ) : (
//             <KeyboardArrowUp className="down" />
//           )}
//           <span className="price">{stock.price}</span>
//         </div>
//       </div>
//       {showWatchlistActions && <WatchListActions uid={stock.name} />}
//     </li>
//   );
// };

// const WatchListActions = ({ uid }) => {
//   const generalContext = useContext(GeneralContext);

//   const handleBuyClick = () => {
//     generalContext.openBuyWindow(uid);
//   };

//   return (
//     <span className="actions">
//       <span>
//         <Tooltip
//           title="Buy"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//           onClick={handleBuyClick}
//         >
//           <button className="buy">Buy</button>
//         </Tooltip>
//         <Tooltip
//           title="Sell"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="sell">Sell</button>
//         </Tooltip>
//         <Tooltip
//           title="Analytics"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="action">
//             <BarChartOutlined className="icon" />
//           </button>
//         </Tooltip>
//         <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
//           <button className="action">
//             <MoreHoriz className="icon" />
//           </button>
//         </Tooltip>
//       </span>
//     </span>
//   );
// };
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
import { DoughnutChart } from "./DoughnoutChart";

const API_KEY = "cvodq5hr01qppf5cfrigcvodq5hr01qppf5cfrj0";

// Top 100 S&P 500 companies
const sp500Top100 = [
  "AAPL", "MSFT", "GOOGL", "AMZN", "NVDA", "META", "BRK.B", "TSLA", "LLY", "AVGO",
  "UNH", "JPM", "JNJ", "XOM", "V", "PG", "MA", "HD", "CVX", "MRK",
  "ABBV", "PEP", "COST", "KO", "ADBE", "BAC", "WMT", "CRM", "TMO", "MCD",
  "NFLX", "ACN", "ABT", "DHR", "LIN", "INTC", "AMD", "TXN", "NEE", "PFE",
  "DIS", "NKE", "QCOM", "ORCL", "PM", "AMGN", "HON", "BMY", "UNP", "LOW",
  "MDT", "IBM", "SBUX", "RTX", "GS", "CAT", "NOW", "ISRG", "BLK", "GE",
  "SPGI", "ADP", "DE", "CVS", "PLD", "MO", "INTU", "T", "CI", "SYK",
  "LMT", "ZTS", "CB", "ELV", "AMAT", "USB", "VRTX", "C", "ADI", "MMC",
  "MDLZ", "PNC", "TGT", "GILD", "TJX", "ICE", "HCA", "DUK", "EW", "ADI",
  "SO", "BKNG", "REGN", "CL", "FISV", "FIS", "APD", "GM", "CSCO", "SHW"
];

const sp500Top50 = [
  "AAPL", "MSFT", "GOOGL", "AMZN", "NVDA", "META", "BRK.B", "TSLA", "LLY", "AVGO",
  "UNH", "JPM", "JNJ", "XOM", "V", "PG", "MA", "HD", "CVX", "MRK",
  "ABBV", "PEP", "COST", "KO", "ADBE", "BAC", "WMT", "CRM", "TMO", "MCD",
  "NFLX", "ACN", "ABT", "DHR", "LIN", "INTC", "AMD", "TXN", "NEE", "PFE",
  "DIS", "NKE", "QCOM", "ORCL", "PM", "AMGN", "HON", "BMY", "UNP", "LOW"
];

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);
const [loading, setLoading] = useState(true); // NEW


  // useEffect(() => {
  //   const fetchStockData = async () => {
  //     const newList = [];

  //     for (let symbol of sp500Top50) {
  //       try {
  //         const res = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`);
  //         const price = res.data.c;
  //         const prevClose = res.data.pc;
  //         const percentChange = ((price - prevClose) / prevClose * 100).toFixed(2);

  //         newList.push({
  //           name: symbol,
  //           price,
  //           percent: `${percentChange}%`,
  //           isDown: percentChange < 0
  //         });
  //       } catch (err) {
  //         console.error(`Error fetching data for ${symbol}`, err);
  //       }
  //     }

  //     setWatchlist(newList);
  //     setLoading(false);
  //   };

  //   fetchStockData();
  // }, []);

  useEffect(() => {
    const fetchStockData = async () => {
      const newList = [];
  
      for (let i = 0; i < sp500Top50.length; i++) {
        const symbol = sp500Top50[i];
        try {
          const res = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`);
          const price = res.data.c;
          const prevClose = res.data.pc;
          const percentChange = ((price - prevClose) / prevClose * 100).toFixed(2);
  
          newList.push({
            name: symbol,
            price,
            percent: `${percentChange}%`,
            isDown: percentChange < 0
          });
        } catch (err) {
          console.error(`Error fetching data for ${symbol}`, err);
        }
  
        // Pause after 25 companies
        if (i%25 === 24) {
          console.log("⏸️ Pausing for 1 minute after fetching 25 companies...");
          await new Promise(resolve => setTimeout(resolve, 60000)); // Wait for 60 seconds
        }
      }
  
      setWatchlist(newList);
      setLoading(false);
    };
  
    fetchStockData();
  }, []);
  

  const data = {
    labels: watchlist.map((s) => s.name),
    datasets: [
      {
        label: "Price",
        data: watchlist.map((s) => s.price),
        backgroundColor: [...Array(watchlist.length)].map((_, i) => `rgba(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, 200, 0.5)`),
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: 1
      }
    ]
  };

  return (
    // <div>
    // {loading ? (
    //   <div className="d-flex justify-content-center align-items-center vh-100">
    //     <div className="spinner-border text-primary" role="status">
    //       <span className="visually-hidden">Loading...</span>
    //     </div>
    //   </div>
    //   ) : (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  // )}
  // </div>
  )

};

export default WatchList;


const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};