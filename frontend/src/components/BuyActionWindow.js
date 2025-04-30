import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const API_KEY = "cvodq5hr01qppf5cfrigcvodq5hr01qppf5cfrj0";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeBuyWindow } = useContext(GeneralContext);


  const getAuthToken = () =>
    localStorage.getItem("token") || sessionStorage.getItem("token");
  
  // Fetch current stock price when component mounts
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${uid}&token=${API_KEY}`);
        setStockPrice(res.data.c || 0.0);
      } catch (error) {
        console.error(`Error fetching price for ${uid}:`, error);
      }
    };
    fetchPrice();
  }, [uid]);

  const handleBuyClick = () => {
    console.log(`Bearer ${getAuthToken()}`);
    axios.post(
      "http://localhost:3002/newOrder",
      {
        name: uid,             // stock symbol
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY"
      },
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`
        }
      }
    )
    closeBuyWindow();
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  const marginRequired = (stockPrice * stockQuantity).toFixed(2);

  return (
    <div
      className="container position-absolute top-50 start-50 translate-middle shadow p-4 bg-white rounded"
      id="buy-window"
      draggable="true"
      style={{ maxWidth: "400px", zIndex: 9999 }}
    >
      <h5 className="mb-3">Buy {uid}</h5>

      <div className="mb-3">
        <label htmlFor="qty" className="form-label">Quantity</label>
        <input
          type="number"
          className="form-control"
          id="qty"
          min="1"
          value={stockQuantity}
          onChange={(e) => setStockQuantity(Number(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price (per unit)</label>
        <input
          type="number"
          className="form-control"
          id="price"
          value={stockPrice}
          disabled
        />
      </div>

      <div className="mb-3 text-muted">
        Margin required: ${marginRequired}
      </div>

      <div className="d-flex justify-content-between">
        <Link className="btn btn-success" onClick={handleBuyClick}>
          Buy
        </Link>
        <Link className="btn btn-secondary" onClick={handleCancelClick}>
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default BuyActionWindow;
























// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import GeneralContext from "./GeneralContext";

// const API_KEY = "cvodq5hr01qppf5cfrigcvodq5hr01qppf5cfrj0";

// const BuyActionWindow = ({ uid }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);

//   const { closeBuyWindow } = useContext(GeneralContext); // ✅ useContext fix


//   // Fetch current stock price when component mounts
//   useEffect(() => {
//     const fetchPrice = async () => {
//       try {
//         const res = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${uid}&token=${API_KEY}`);
//         setStockPrice(res.data.c || 0.0);
//       } catch (error) {
//         console.error(`Error fetching price for ${uid}:`, error);
//       }
//     };
//     fetchPrice();
//   }, [uid]);

//   const handleBuyClick = () => {
//     axios.post("http://localhost:3002/newOrder", {
//       name: uid,
//       qty: stockQuantity,
//       price: stockPrice,
//       mode: "BUY",
//     });

//     closeBuyWindow();
//   };

//   const handleCancelClick = () => {
//     closeBuyWindow();
//   };

//   return (
//     <div
//       className="container position-absolute top-50 start-50 translate-middle shadow p-4 bg-white rounded"
//       id="buy-window"
//       draggable="true"
//       style={{ maxWidth: "400px", zIndex: 9999 }}
//     >
//       <h5 className="mb-3">Buy {uid}</h5>
//       <div className="mb-3">
//         <label htmlFor="qty" className="form-label">Quantity</label>
//         <input
//           type="number"
//           className="form-control"
//           id="qty"
//           value={stockQuantity}
//           onChange={(e) => setStockQuantity(e.target.value)}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="price" className="form-label">Price</label>
//         <input
//           type="number"
//           className="form-control"
//           id="price"
//           step="0.05"
//           value={stockPrice}
//           onChange={(e) => setStockPrice(e.target.value)}
//         />
//       </div>

//       <div className="mb-3 text-muted">
//         Margin required: ₹140.65
//       </div>

//       <div className="d-flex justify-content-between">
//         <Link className="btn btn-success" onClick={handleBuyClick}>
//           Buy
//         </Link>
//         <Link className="btn btn-secondary" onClick={handleCancelClick}>
//           Cancel
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default BuyActionWindow;







