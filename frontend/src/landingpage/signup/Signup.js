import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  // Form state
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    try {
      const response = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),

      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setMessage("Signup successful! Redirecting to login...");
        setTimeout(() => navigate("/Login"), 2000);
      } else {
        setError(data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please check your connection.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-lg p-4 border-0" style={{ width: "380px", borderRadius: "15px" }}>
        <h2 className="text-center text-dark fw-bold mb-2">Signup Now</h2>
        <p className="text-center text-muted">Create your account to get started</p>

        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3 input-group">
            <span className="input-group-text bg-white border-end-0">
              <FaUser className="text-primary" />
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Enter username"
              name="username"
              value={user.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3 input-group">
            <span className="input-group-text bg-white border-end-0">
              <FaEnvelope className="text-primary" />
            </span>
            <input
              type="email"
              className="form-control border-start-0"
              placeholder="Enter email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3 input-group">
            <span className="input-group-text bg-white border-end-0">
              <FaLock className="text-primary" />
            </span>
            <input
              type="password"
              className="form-control border-start-0"
              placeholder="Enter password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Sign Up Button */}
          <button className="btn btn-primary w-100 fw-bold py-2" style={{ borderRadius: "10px" }}>
            Sign Up
          </button>
        </form>

        <p className="text-center text-muted mt-3">
          By proceeding, you agree to the{" "}
          <a href="#" className="text-primary fw-bold">terms</a> &{" "}
          <a href="#" className="text-primary fw-bold">privacy policy</a>.
        </p>
        <p className="text-center text-muted mt-3">
          Already have an account?{" "}
          <Link className="nav-link d-inline text-primary" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;





// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
// import { Link } from 'react-router-dom';

// const Signup = () => {
//   return (
//     <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
//       <div className="card shadow-lg p-4 border-0" style={{ width: "380px", borderRadius: "15px" }}>
//         <h2 className="text-center text-dark fw-bold mb-2">Signup Now</h2>
//         <p className="text-center text-muted">Create your account to get started</p>

//         <form>
//           {/* Username */}
//           <div className="mb-3 input-group">
//             <span className="input-group-text bg-white border-end-0">
//               <FaUser className="text-primary" />
//             </span>
//             <input type="text" className="form-control border-start-0" placeholder="Enter username" />
//           </div>

//           {/* Email */}
//           <div className="mb-3 input-group">
//             <span className="input-group-text bg-white border-end-0">
//               <FaEnvelope className="text-primary" />
//             </span>
//             <input type="email" className="form-control border-start-0" placeholder="Enter email" />
//           </div>

//           {/* Password */}
//           <div className="mb-3 input-group">
//             <span className="input-group-text bg-white border-end-0">
//               <FaLock className="text-primary" />
//             </span>
//             <input type="password" className="form-control border-start-0" placeholder="Enter password" />
//           </div>

//           {/* Sign Up Button */}
//           <button className="btn btn-primary w-100 fw-bold py-2" style={{ borderRadius: "10px" }}>
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center text-muted mt-3">
//           By proceeding, you agree to the <a href="#" className="text-primary fw-bold">terms</a> &{" "}
//           <a href="#" className="text-primary fw-bold">privacy policy</a>.
//         </p>
//         <p className="text-center text-muted mt-3">
//             Already have an account?{" "}
//   <Link className="nav-link d-inline text-primary" to="/Login">
//     Login
//   </Link>
// </p>

                
             
//       </div>
//     </div>
//   );
// };

// export default Signup;




