import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getThemeSettings } from "../theme";
import logo from "../assets/logo.png";

export default function Login() {
    const theme = getThemeSettings();
    const navigate = useNavigate();

    // Modes: "client", "admin", "create"
    const [mode, setMode] = useState("client");

    // Form state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");

    // Hardcoded admin accounts
    const ADMIN_ACCOUNTS = [
        { email: "buzzysentertainment@gmail.com", password: "Buzzys1!" },
        { email: "buzzysadmin@gmail.com", password: "Buzzys1!" }
    ];

    // Handle Client Login
    const handleClientLogin = () => {
        const clients = JSON.parse(localStorage.getItem("clients") || "[]");
        const found = clients.find((c) => c.email === email && c.password === password);

        if (found) {
            navigate("/dashboard");
        } else {
            setError("Invalid client login. Please try again.");
        }
    };

    // Handle Admin Login
    const handleAdminLogin = () => {
        const found = ADMIN_ACCOUNTS.find(
            (a) => a.email === email && a.password === password
        );

        if (found) {
            navigate("/admin");
        } else {
            setError("Invalid admin credentials.");
        }
    };

    // Handle Create Account
    const handleCreateAccount = () => {
        if (!fullName || !email || !password || !confirmPassword) {
            setError("Please fill out all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        const clients = JSON.parse(localStorage.getItem("clients") || "[]");

        if (clients.find((c) => c.email === email)) {
            setError("An account with this email already exists.");
            return;
        }

        const newClient = { fullName, email, password };
        clients.push(newClient);
        localStorage.setItem("clients", JSON.stringify(clients));

        navigate("/dashboard");
    };

    // Shared styles
    const container = {
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `${theme.backgroundColor}`,
        padding: "40px"
    };

    const card = {
        width: "420px",
        background: `${theme.backgroundColor}ee`,
        borderRadius: "16px",
        padding: "35px",
        boxShadow: `0 0 25px ${theme.primaryColor}`,
        border: `1px solid ${theme.primaryColor}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "0.3s ease"
    };

    const logoStyle = {
        width: "70px",
        marginBottom: "15px",
        filter: `drop-shadow(0 0 10px ${theme.primaryColor})`
    };

    const title = {
        fontSize: "26px",
        fontWeight: "700",
        color: theme.primaryColor,
        marginBottom: "20px",
        textShadow: `0 0 10px ${theme.primaryColor}`
    };

    const tabs = {
        display: "flex",
        gap: "20px",
        marginBottom: "25px"
    };

    const tab = (active) => ({
        padding: "8px 16px",
        borderRadius: "10px",
        cursor: "pointer",
        fontWeight: "600",
        color: active ? theme.backgroundColor : theme.accentColor,
        background: active ? theme.accentColor : "transparent",
        boxShadow: active ? `0 0 12px ${theme.accentColor}` : "none",
        transition: "0.25s ease"
    });

    const input = {
        width: "100%",
        padding: "12px",
        marginBottom: "15px",
        borderRadius: "10px",
        border: `1px solid ${theme.primaryColor}`,
        background: `${theme.backgroundColor}aa`,
        color: theme.accentColor,
        fontSize: "16px",
        outline: "none",
        boxShadow: `0 0 8px ${theme.primaryColor}55`
    };

    const button = {
        width: "100%",
        padding: "12px",
        borderRadius: "10px",
        background: theme.accentColor,
        color: theme.backgroundColor,
        fontWeight: "700",
        fontSize: "18px",
        cursor: "pointer",
        border: "none",
        marginTop: "10px",
        boxShadow: `0 0 15px ${theme.accentColor}`,
        transition: "0.25s ease"
    };

    const link = {
        marginTop: "15px",
        color: theme.primaryColor,
        cursor: "pointer",
        fontWeight: "600",
        textShadow: `0 0 8px ${theme.primaryColor}`
    };

    return (
        <div style={container}>
            <div style={card}>
                <img src={logo} alt="Logo" style={logoStyle} />
                <div style={title}>Final Digital Draft</div>

                {/* Tabs */}
                <div style={tabs}>
                    <div style={tab(mode === "client")} onClick={() => { setMode("client"); setError(""); }}>
                        Client
                    </div>
                    <div style={tab(mode === "admin")} onClick={() => { setMode("admin"); setError(""); }}>
                        Admin
                    </div>
                    <div style={tab(mode === "create")} onClick={() => { setMode("create"); setError(""); }}>
                        Create Account
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div style={{ color: "red", marginBottom: "15px", fontWeight: "600" }}>
                        {error}
                    </div>
                )}

                {/* CLIENT LOGIN */}
                {mode === "client" && (
                    <>
                        <input
                            style={input}
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            style={input}
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button style={button} onClick={handleClientLogin}>
                            Login
                        </button>
                        <div style={link} onClick={() => setMode("create")}>
                            Don’t have an account? Create one
                        </div>
                    </>
                )}

                {/* ADMIN LOGIN */}
                {mode === "admin" && (
                    <>
                        <input
                            style={input}
                            placeholder="Admin Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            style={input}
                            type="password"
                            placeholder="Admin Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button style={button} onClick={handleAdminLogin}>
                            Admin Login
                        </button>
                    </>
                )}

                {/* CREATE ACCOUNT */}
                {mode === "create" && (
                    <>
                        <input
                            style={input}
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <input
                            style={input}
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            style={input}
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            style={input}
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button style={button} onClick={handleCreateAccount}>
                            Create Account
                        </button>
                    </>
                )}

                <div style={{ ...link, marginTop: "25px" }} onClick={() => navigate("/")}>
                    Back to Home
                </div>
            </div>
        </div>
    );
}
