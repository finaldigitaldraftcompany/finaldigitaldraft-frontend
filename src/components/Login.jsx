import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Hardwired admin accounts
    const admins = [
        { email: "ereigns23@gmail.com", password: "FinalDraft25!" },
        { email: "kandy.stamey@gmail.com", password: "FinalDraft25!" }
    ];

    const handleLogin = (e) => {
        e.preventDefault();

        const isAdmin = admins.some(
            (admin) => admin.email === email && admin.password === password
        );

        if (isAdmin) {

            // ✅ Save login state for the header
            localStorage.setItem("loggedInUser", email);
            localStorage.setItem("isLoggedIn", "true");

            // ✅ Keep your admin flag
            localStorage.setItem("isAdmin", "true");

            // ✅ Redirect to admin dashboard
            navigate("/admin");

        } else {
            alert("Invalid login");
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>

            <form className="auth-form" onSubmit={handleLogin}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />

                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                />

                <button type="submit" className="auth-btn">Login</button>
            </form>

            <p className="auth-switch">
                Don’t have an account? <a href="/signup">Sign Up</a>
            </p>
        </div>
    );
}