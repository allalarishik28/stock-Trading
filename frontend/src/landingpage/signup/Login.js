import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Login = ({isLoggedIn, setIsLoggedIn}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // Remember me state
  const navigate = useNavigate(); // Initialize navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3002/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });



      const data = await response.json();

      console.log(response);


      if (response.ok) {
        console.log(data);
        // Store token and userId based on remember me option
        if (rememberMe) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.userId);
        } else {
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("userId", data.userId);
        }
        setIsLoggedIn(true); // Set logged in state
        navigate("/");
        // Redirect to Dashboard App or Orders page
        // navigate("/orders"); // Navigate to Orders after login
        
      } else {
        setError(data.message || "Invalid credentials!");
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="bg-white p-4 p-md-5 rounded-4 shadow-lg" style={{ width: "350px" }}>
        <h2 className="text-center text-dark mb-3 fw-bold">Welcome Back</h2>
        <p className="text-center text-muted mb-4">Login to continue</p>

        {error && <div className="alert alert-danger p-2">{error}</div>}

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
              <input 
                type="checkbox" 
                id="rememberMe" 
                checked={rememberMe} 
                onChange={() => setRememberMe(!rememberMe)} 
              />
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

