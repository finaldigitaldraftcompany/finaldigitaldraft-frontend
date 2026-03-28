import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // SUPER SIMPLE AUTH FOR NOW
    if (email === "admin@finaldigitaldraft.com" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin");
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h1 className="admin-title">Admin Login</h1>

        <form onSubmit={handleSubmit} className="admin-form">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
          />

          {error && <p className="admin-error">{error}</p>}

          <button type="submit" className="admin-btn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
