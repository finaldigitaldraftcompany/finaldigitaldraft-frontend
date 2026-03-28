import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getThemeSettings } from "../theme";

export default function Header() {
  const navigate = useNavigate();
  const theme = getThemeSettings();

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
    <header
      style={{
        width: "100%",
        padding: "18px 30px",
        background: "#000",
        color: theme.textColor || "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: `0 0 12px ${theme.primaryColor}`,
      }}
    >
      {/* Brand */}
      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: theme.primaryColor,
        }}
      >
        Final Digital Draft
      </div>

      {/* Auth Buttons */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          paddingRight: "40px", // ✅ Added spacing so it doesn't get cut off
        }}
      >
        {isLoggedIn ? (
          <>
            <span
              style={{
                color: theme.accentColor,
                fontWeight: "600",
                fontSize: "16px",
                whiteSpace: "nowrap", // ✅ Prevents wrapping/cutting
              }}
            >
              Welcome, {username}
            </span>

            <button
              onClick={handleLogout}
              style={{
                background: theme.primaryColor,
                color: "#000",
                border: "none",
                borderRadius: "6px",
                padding: "8px 16px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "16px",
                whiteSpace: "nowrap",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{
                background: theme.primaryColor,
                color: "#000",
                padding: "8px 16px",
                borderRadius: "6px",
                fontWeight: "600",
                textDecoration: "none",
                fontSize: "16px",
                whiteSpace: "nowrap",
              }}
            >
              Login
            </Link>

            <Link
              to="/signup"
              style={{
                background: theme.accentColor,
                color: "#000",
                padding: "8px 16px",
                borderRadius: "6px",
                fontWeight: "600",
                textDecoration: "none",
                fontSize: "16px",
                whiteSpace: "nowrap",
              }}
            >
              Sign Up
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}