import React from 'react';

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5 align-items-center">  {/* Ensures equal height */}

        {/* Left Text Section */}
        <div className="col-6 p-5 d-flex flex-column justify-content-between" style={{ minHeight: "500px" }}>
          <div>
            <h1 className="fs-2 mb-3">Trust with confidence</h1>

            <h2 className="fs-5 mb-2">Customer-first always</h2>
            <p className="text-muted mb-2">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
              worth of equity investments.
            </p>

            <h2 className="fs-5 mb-2">No spam or gimmicks</h2>
            <p className="text-muted mb-2">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High-quality apps that you use at your pace, the way you like.
            </p>

            <h2 className="fs-5 mb-2">The Zerodha universe</h2>
            <p className="text-muted mb-2">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your needs.
            </p>

            <h2 className="fs-5 mb-2">Do better with money</h2>
            <p className="text-muted mb-2">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="col-6 p-5 d-flex flex-column justify-content-between" style={{ minHeight: "550px" }}>
          <img src="media/ecosystem.png" style={{ width: "90%", height: "auto" }} />

          {/* Centered Links */}
          <div className="text-center">
            <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;




// import React from 'react';

// function Stats() {
//     return (
//       <div className="container p-3">
//       <div className="row p-5">
//         <div className="col-6 p-5">
//           <h1 className="fs-2 mb-5">Trust with confidence</h1>
//           <h2 className="fs-4">Customer-first always</h2>
//           <p className="text-muted">
//             That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
//             worth of equity investments.
//           </p>
//           <h2 className="fs-4">No spam or gimmicks</h2>
//           <p className="text-muted">
//             No gimmicks, spam, "gamification", or annoying push notifications.
//             High quality apps that you use at your pace, the way you like.
//           </p>
//           <h2 className="fs-4">The Zerodha universe</h2>
//           <p className="text-muted">
//             Not just an app, but a whole ecosystem. Our investments in 30+
//             fintech startups offer you tailored services specific to your needs.
//           </p>
//           <h2 className="fs-4">Do better with money</h2>
//           <p className="text-muted">
//             With initiatives like Nudge and Kill Switch, we don't just
//             facilitate transactions, but actively help you do better with your
//             money.
//           </p>
//         </div>
//         <div className="col-6 p-5">
//           <img src="media/ecosystem.png" style={{ width: "90%" }} />
//           <div className="text-center">
//             <a href="" className="mx-5" style={{ textDecoration: "none" }}>
//               Explore our products{" "}
//               <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//             </a>
//             <a href="" style={{ textDecoration: "none" }}>
//               Try Kite demo{" "}
//               <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//       );
// }

// export default Stats;