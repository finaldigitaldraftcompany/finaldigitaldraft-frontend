import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/NavBar.css";
import logo from "../assets/logo.png";

export default function NavBar() {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Brand */}
            <div className="nav-brand" onClick={() => navigate("/")}>
                <img src={logo} alt="Final Digital Draft Logo" className="nav-logo" />
                <span className="nav-title">Final Digital Draft</span>
            </div>

            {/* Main Navigation */}
            <div className="nav-links">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/services">Services</Link>
                <Link className="nav-link" to="/pricing">Pricing</Link>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/about">About</Link>

                {/* Dropdown */}
                <span
                    className="dropdown-toggle"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    More ▾
                </span>
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
                <div className="dropdown-menu">
                    <div className="dropdown-section">
                        <div className="dropdown-section-title">Services</div>
                        <div className="dropdown-item" onClick={() => navigate("/services")}>Custom Website Design</div>
                        <div className="dropdown-item" onClick={() => navigate("/services")}>UI/UX Design</div>
                        <div className="dropdown-item" onClick={() => navigate("/services")}>Branding & Identity</div>
                        <div className="dropdown-item" onClick={() => navigate("/services")}>Digital Assets</div>
                    </div>

                    <div className="dropdown-section">
                        <div className="dropdown-section-title">Company</div>
                        <div className="dropdown-item" onClick={() => navigate("/about")}>About Us</div>
                        <div className="dropdown-item" onClick={() => navigate("/portfolio")}>Portfolio</div>
                        <div className="dropdown-item" onClick={() => navigate("/contact")}>Contact</div>
                    </div>

                    <div className="dropdown-section">
                        <div className="dropdown-section-title">Resources</div>
                        <div className="dropdown-item" onClick={() => navigate("/pricing")}>Pricing</div>
                        <div className="dropdown-item" onClick={() => navigate("/faq")}>FAQs</div>
                        <div className="dropdown-item" onClick={() => navigate("/policies")}>Policies</div>
                        <div className="dropdown-item" onClick={() => navigate("/support")}>Support</div>
                    </div>

                    <div className="dropdown-section">
                        <div className="dropdown-section-title">Client Portal</div>
                        <div className="dropdown-item" onClick={() => navigate("/dashboard")}>Dashboard</div>
                        <div className="dropdown-item" onClick={() => navigate("/appointments")}>Appointments</div>
                        <div className="dropdown-item" onClick={() => navigate("/billing")}>Billing</div>
                    </div>

                    <div className="dropdown-section">
                        <div className="dropdown-section-title">Admin</div>
                        <div className="dropdown-item" onClick={() => navigate("/admin")}>Admin Login</div>
                    </div>
                </div>
            )}
        </nav>
    );
}
