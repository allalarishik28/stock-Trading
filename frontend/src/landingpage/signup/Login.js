import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page refresh
    setLoading(true); // Start loading

    try {
      const response = await fetch("http://localhost:3002/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Store JWT token
        window.location.href = "http://localhost:3001/"; // Redirect to Dashboard App
      } else {
        setError(data.message || "Invalid credentials!");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="bg-white p-4 p-md-5 rounded-4 shadow-lg" style={{ width: "350px" }}>
        <h2 className="text-center text-dark mb-3 fw-bold">Welcome Back</h2>
        <p className="text-center text-muted mb-4">Login to continue</p>

        {error && <div className="alert alert-danger p-2">{error}</div>} {/* Show error message */}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label text-muted fw-semibold">Email</label>
            <input 
              type="email" 
              className="form-control rounded-3 border-0 shadow-sm"
              placeholder="Enter email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-muted fw-semibold">Password</label>
            <input 
              type="password" 
              className="form-control rounded-3 border-0 shadow-sm"
              placeholder="Enter password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>

          <div className="d-flex justify-content-between mb-3">
            <div>
              <input type="checkbox" id="rememberMe" /> 
              <label htmlFor="rememberMe" className="ms-2 text-muted">Remember me</label>
            </div>
            <a href="#" className="text-decoration-none text-primary small">Forgot Password?</a>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary w-100 rounded-3 shadow-sm py-2 fw-semibold"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-muted mt-3">
          Don't have an account? <a href="/signup" className="text-primary fw-semibold">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import "bootstrap/dist/css/bootstrap.min.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleLogin = async (e) => {
//     e.preventDefault(); // Prevent page refresh

//     try {
//       const response = await fetch("http://localhost:3002/login", { // Ensure this matches your backend route
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("token", data.token); // Store JWT token
//         navigate("/dashboard"); // Redirect to Dashboard
//       } else {
//         setError(data.message || "Invalid credentials!");
//       }
//     } catch (error) {
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
//       <div className="bg-white p-4 p-md-5 rounded-4 shadow-lg" style={{ width: "350px" }}>
//         <h2 className="text-center text-dark mb-3 fw-bold">Welcome Back</h2>
//         <p className="text-center text-muted mb-4">Login to continue</p>

//         {error && <div className="alert alert-danger p-2">{error}</div>} {/* Show error message */}

//         <form onSubmit={handleLogin}>
//           <div className="mb-3">
//             <label className="form-label text-muted fw-semibold">Email</label>
//             <input 
//               type="email" 
//               className="form-control rounded-3 border-0 shadow-sm"
//               placeholder="Enter email"
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label text-muted fw-semibold">Password</label>
//             <input 
//               type="password" 
//               className="form-control rounded-3 border-0 shadow-sm"
//               placeholder="Enter password"
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//               required
//             />
//           </div>

//           <div className="d-flex justify-content-between mb-3">
//             <div>
//               <input type="checkbox" id="rememberMe" /> 
//               <label htmlFor="rememberMe" className="ms-2 text-muted">Remember me</label>
//             </div>
//             <a href="#" className="text-decoration-none text-primary small">Forgot Password?</a>
//           </div>

//           <button type="submit" className="btn btn-primary w-100 rounded-3 shadow-sm py-2 fw-semibold">
//             Login
//           </button>
//         </form>

//         <p className="text-center text-muted mt-3">
//           Don't have an account? <a href="/signup" className="text-primary fw-semibold">Sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
