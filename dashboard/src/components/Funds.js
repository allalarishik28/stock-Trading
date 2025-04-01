import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="funds-container">
      {/* Header Section */}
      <div className="funds-header">
        <h2>Funds</h2>
        <p>Instant, zero-cost fund transfers with UPI</p>
        <div className="funds-actions">
          <Link className="btn btn-green">Add Funds</Link>
          <Link className="btn btn-blue">Withdraw</Link>
        </div>
      </div>

      {/* Equity Section */}
      <div className="funds-card">
        <h3>Equity</h3>
        <div className="funds-grid">
          <div className="funds-item">
            <p>Available Margin</p>
            <p className="value colored">₹4,043.10</p>
          </div>
          <div className="funds-item">
            <p>Used Margin</p>
            <p className="value">₹3,757.30</p>
          </div>
          <div className="funds-item">
            <p>Available Cash</p>
            <p className="value">₹4,043.10</p>
          </div>
        </div>
        <hr />
        <div className="funds-grid">
          <div className="funds-item">
            <p>Opening Balance</p>
            <p>₹4,043.10</p>
          </div>
          <div className="funds-item">
            <p>Payin</p>
            <p>₹4,064.00</p>
          </div>
          <div className="funds-item">
            <p>SPAN</p>
            <p>₹0.00</p>
          </div>
          <div className="funds-item">
            <p>Delivery Margin</p>
            <p>₹0.00</p>
          </div>
          <div className="funds-item">
            <p>Exposure</p>
            <p>₹0.00</p>
          </div>
          <div className="funds-item">
            <p>Options Premium</p>
            <p>₹0.00</p>
          </div>
        </div>
        <hr />
        <div className="funds-grid">
          <div className="funds-item">
            <p>Collateral (Liquid Funds)</p>
            <p>₹0.00</p>
          </div>
          <div className="funds-item">
            <p>Collateral (Equity)</p>
            <p>₹0.00</p>
          </div>
          <div className="funds-item">
            <p>Total Collateral</p>
            <p>₹0.00</p>
          </div>
        </div>
      </div>

      {/* Commodity Section */}
      <div className="funds-card">
        <h3>Commodity</h3>
        <div className="commodity-notice">
          <p>You don't have a commodity account</p>
          <Link className="btn btn-blue">Open Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Funds;





// import React from "react";
// import { Link } from "react-router-dom";

// const Funds = () => {
//   return (
//     <>
//       <div className="funds">
//         <p>Instant, zero-cost fund transfers with UPI </p>
//         <Link className="btn btn-green">Add funds</Link>
//         <Link className="btn btn-blue">Withdraw</Link>
//       </div>

//       <div className="row">
//         <div className="col">
//           <span>
//             <p>Equity</p>
//           </span>

//           <div className="table">
//             <div className="data">
//               <p>Available margin</p>
//               <p className="imp colored">4,043.10</p>
//             </div>
//             <div className="data">
//               <p>Used margin</p>
//               <p className="imp">3,757.30</p>
//             </div>
//             <div className="data">
//               <p>Available cash</p>
//               <p className="imp">4,043.10</p>
//             </div>
//             <hr />
//             <div className="data">
//               <p>Opening Balance</p>
//               <p>4,043.10</p>
//             </div>
//             <div className="data">
//               <p>Opening Balance</p>
//               <p>3736.40</p>
//             </div>
//             <div className="data">
//               <p>Payin</p>
//               <p>4064.00</p>
//             </div>
//             <div className="data">
//               <p>SPAN</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Delivery margin</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Exposure</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Options premium</p>
//               <p>0.00</p>
//             </div>
//             <hr />
//             <div className="data">
//               <p>Collateral (Liquid funds)</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Collateral (Equity)</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Total Collateral</p>
//               <p>0.00</p>
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <div className="commodity">
//             <p>You don't have a commodity account</p>
//             <Link className="btn btn-blue">Open Account</Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Funds;