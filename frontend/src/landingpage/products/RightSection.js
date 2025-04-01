import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Column */}
        <div className="col-6 p-5 mt-5" style={{ height: "300px" }}>
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-6" style={{ height: "300px", overflow: "hidden" }}>
          <img
            src={imageURL}
            alt={productName}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;

// import React from "react";

// function RightSection({ imageURL, productName, productDesription, learnMore }) {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-6 p-5 mt-5">
//           <h1>{productName}</h1>
//           <p>{productDesription}</p>
//           <div>
//             <a href={learnMore}>Learn More</a>
//           </div>
//         </div>
//         <div className="col-6">
//           <img src={imageURL} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RightSection;