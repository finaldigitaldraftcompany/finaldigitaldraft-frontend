import "./Auth.css";

export default function Signup() {
    return (
        <div className="auth-container">
            <h2>Create Account</h2>

            <form className="auth-form">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />

                <button type="submit" className="auth-btn">Sign Up</button>
            </form>

            <p className="auth-switch">
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    );
}