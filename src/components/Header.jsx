import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const savedUser = localStorage.getItem("loggedInUser");

    setIsLoggedIn(loggedIn);
    setUsername(savedUser || "");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("isAdmin");

    setIsLoggedIn(false);
    setUsername("");

    navigate("/login");
  };

  return (
    <header className="header">
      <div className="brand">Final Digital Draft</div>

      <nav className="auth-buttons">
        {isLoggedIn ? (
          <>
            <span className="welcome-text">Welcome, {username}</span>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="login-btn" to="/login">
              Login
            </Link>

            <Link className="signup-btn" to="/signup">
              Sign Up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
