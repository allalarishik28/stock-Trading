import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  const fetchOrders = async () => {
    let token = localStorage.getItem("token"); // Retrieve token
    if(!token) {
      token = sessionStorage.getItem("token"); // Check session storage if not found in local storage
    }
    if (!token) {
      setError("Unauthorized! Please log in.");
      setTimeout(() => navigate("/"), 3000); // Redirect after 3 seconds
      return;
    }

    try {
      const response = await axios.get("http://localhost:3002/allOrders", {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token in headers
        },
      });
      setAllOrders(response.data); // Set all orders data on success
    } catch (err) {
      if (err.response && (err.response.status === 401 || err.response.status === 403)) {
        setError("Session expired! Redirecting to login...");
        localStorage.removeItem("token"); // Clear token
        setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
      } else {
        setError("Error fetching orders. Please try again later.");
      }
    }
  };

  // user_id: req.userId,  // ✅ This comes from the decoded token in middleware
  // symbol: name,
  // type: mode,
  // price,
  // quantity: qty

  useEffect(() => {
    fetchOrders(); // Fetch orders when component is mounted
  }, [navigate]); // Added `navigate` dependency to ensure navigation works

  return (
    <>
      <h3 className="title">Orders</h3>
      {error && <p className="text-danger">{error}</p>}

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.length === 0 ? (
              <tr>
                <td colSpan="4">No orders found.</td>
              </tr>
            ) : (
              allOrders.map((stock, index) => (
                <tr key={index}>
                  <td>{stock.symbol}</td>
                  <td>{stock.quantity}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{stock.type}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;



// import { useNavigate } from "react-router-dom"; // Import for navigation
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Orders = () => {
//   const [allOrders, setAllOrders] = useState([]);
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // Initialize navigation

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const token = localStorage.getItem("token"); // Retrieve token
//       if (!token) {
//         setError("Unauthorized! Please log in.");
//         setTimeout(() => navigate("/"), 3000); // Redirect after 2 seconds
//         return;
//       }

//       try {
//         const response = await axios.get("http://localhost:3002/allOrders", {
//           headers: {
//             Authorization: `Bearer ${token}`, // Attach token in headers
//           },
//         });

//         setAllOrders(response.data);
//       } catch (err) {
//         if (err.response && (err.response.status === 401 || err.response.status === 403)) {
//           setError("Session expired! Redirecting to login...");
//           localStorage.removeItem("token"); // Clear token
//           setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
//         } else {
//           setError("Error fetching orders. Try again later.");
//         }
//       }
//     };

//     fetchOrders();
//   }, [navigate]); // Added `navigate` dependency

//   return (
//     <>
//       <h3 className="title">Orders</h3>
//       {error && <p className="text-danger">{error}</p>}

//       <div className="order-table">
//         <table>
//           <thead>
//             <tr>
//               <th>Instrument</th>
//               <th>Qty.</th>
//               <th>Price</th>
//               <th>Mode</th>
//             </tr>
//           </thead>
//           <tbody>
//             {allOrders.length === 0 ? (
//               <tr>
//                 <td colSpan="4">No orders found.</td>
//               </tr>
//             ) : (
//               allOrders.map((stock, index) => (
//                 <tr key={index}>
//                   <td>{stock.name}</td>
//                   <td>{stock.qty}</td>
//                   <td>{stock.price.toFixed(2)}</td>
//                   <td>{stock.mode}</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default Orders;





// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import axios, { all } from "axios";



// const Orders = () => {
//   const [allOrders, setallOrders] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3002/allOrders").then((res) => {
//       // console.log(res.data);
//       setallOrders(res.data);
//     });
//   }, []);

//   // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//   const labels = allOrders.map((subArray) => subArray["name"]);

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Stock Price",
//         data: allOrders.map((stock) => stock.price),
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//     ],
//   };


//   return (
//     <>
//       <h3 className="title">Orders</h3>

//       <div className="order-table">
//         <table>
//           <tr>
//             <th>Instrument</th>
//             <th>Qty.</th>
//             <th>Price</th>
//             <th>Mode</th>
//           </tr>

//           {allOrders.map((stock, index) => {
//             return (
//               <tr key={index}>
//                 <td>{stock.name}</td>
//                 <td>{stock.qty}</td>
//                 <td>{stock.price.toFixed(2)}</td>
//                 <td>{stock.mode}</td>
//               </tr>
//             );
//           })}
//         </table>
//       </div>
//     </>
//   );
// };

// export default Orders;