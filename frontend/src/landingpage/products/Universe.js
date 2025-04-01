import React from "react";
import { useNavigate } from "react-router-dom";


function Universe() {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/smallcaseLogo.png"
            alt="Smallcase"
            style={{ width: "100px", height: "auto" }} // Adjust width and height
          />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/streakLogo.png"
            alt="Streak"
            style={{ width: "100px", height: "auto" }} // Adjust width and height
          />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/sensibullLogo.svg"
            alt="Sensibull"
            style={{ width: "100px", height: "auto" }} // Adjust width and height
          />
          <p className="text-small text-muted">Options Trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            style={{ width: "100px", height: "auto" }} // Adjust width and height
          />
          <p className="text-small text-muted">Asset Management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/goldenpiLogo.png"
            alt="GoldenPI"
            style={{ width: "100px", height: "auto" }} // Adjust width and height
          />
          <p className="text-small text-muted">Bonds Trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/dittoLogo.png"
            alt="Ditto"
            style={{ width: "100px", height: "auto" }} // Adjust width and height
          />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={() => navigate("/Signup")}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;

// import React from "react";

// function Universe() {
//   return (
//     <div className="container mt-5">
//       <div className="row text-center">
//         <h1>The Zerodha Universe</h1>
//         <p>
//           Extend your trading and investment experience even further with our
//           partner platforms
//         </p>

//         <div className="col-4 p-3 mt-5">
//           <img src="media/smallcaseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/streakLogo.png" />
//           <p className="text-small text-muted">Algo & statergy platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/sensibullLogo.svg" />
//           <p className="text-small text-muted">Options Trading Platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/zerodhaFundhouse.png" />
//           <p className="text-small text-muted">Asset Management</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/goldenpiLogo.png" />
//           <p className="text-small text-muted">Bonds Trading platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="media/dittoLogo.png" />
//           <p className="text-small text-muted">Insurance</p>
//         </div>
//         <button
//           className="p-2 btn btn-primary fs-5 mb-5"
//           style={{ width: "20%", margin: "0 auto" }}
//         >
//           Signup Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Universe;