import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getThemeSettings } from "../theme";
import logo from "../assets/logo.png"; // rename your file to logo.png for cleanliness

export default function NavBar() {
    const theme = getThemeSettings();
    const navigate = useNavigate();

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navContainer = {
        width: "100%",
        background: `${theme.backgroundColor}dd`,
        backdropFilter: "blur(6px)",
        borderBottom: `1px solid ${theme.primaryColor}`,
        boxShadow: `0 0 ${theme.glowStrength}px ${theme.primaryColor}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 30px",
        position: "relative",
        zIndex: 1000
    };

    const brandContainer = {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        cursor: "pointer"
    };

    const logoStyle = {
        width: "48px",
        height: "48px",
        objectFit: "contain",
        filter: `drop-shadow(0 0 8px ${theme.primaryColor})`
    };

    const brandText = {
        color: theme.primaryColor,
        fontSize: "24px",
        fontWeight: "700",
        fontFamily: theme.fontFamily,
        textShadow: `0 0 10px ${theme.primaryColor}`
    };

    const navLinks = {
        display: "flex",
        gap: "35px",
        alignItems: "center"
    };

    const linkStyle = {
        color: theme.accentColor,
        textDecoration: "none",
        fontWeight: "600",
        fontSize: "18px",
        fontFamily: theme.fontFamily,
        padding: "6px 10px",
        borderRadius: `${theme.buttonRadius}px`,
        transition: "0.25s ease"
    };

    const hoverStyle = {
        textShadow: `0 0 10px ${theme.accentColor}`,
        boxShadow: `0 0 12px ${theme.accentColor}`,
        background: `${theme.accentColor}22`
    };

    const dropdownButton = {
        ...linkStyle,
        cursor: "pointer"
    };

    const dropdownMenu = {
        position: "absolute",
        top: "70px",
        right: "30px",
        background: `${theme.backgroundColor}ee`,
        border: `1px solid ${theme.primaryColor}`,
        boxShadow: `0 0 15px ${theme.primaryColor}`,
        borderRadius: "10px",
        padding: "20px",
        display: dropdownOpen ? "grid" : "none",
        gridTemplateColumns: "1fr 1fr",
        gap: "30px",
        zIndex: 2000
    };

    const sectionHeader = {
        color: theme.primaryColor,
        fontWeight: "700",
        fontSize: "16px",
        marginBottom: "10px",
        textShadow: `0 0 8px ${theme.primaryColor}`
    };

    const dropdownItem = {
        color: theme.accentColor,
        fontSize: "15px",
        marginBottom: "8px",
        cursor: "pointer",
        transition: "0.2s ease"
    };

    return (
        <nav style={navContainer}>
            {/* Brand */}
            <div style={brandContainer} onClick={() => navigate("/")}>
                <img src={logo} alt="Final Digital Draft Logo" style={logoStyle} />
                <span style={brandText}>Final Digital Draft</span>
            </div>

            {/* Main Navigation */}
            <div style={navLinks}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/services" style={linkStyle}>Services</Link>
                <Link to="/pricing" style={linkStyle}>Pricing</Link>
                <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
                <Link to="/contact" style={linkStyle}>Contact</Link>
                <Link to="/about" style={linkStyle}>About</Link>

                {/* Dropdown Button */}
                <span
                    style={dropdownButton}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
                    onMouseLeave={(e) => Object.assign(e.target.style, dropdownButton)}
                >
                    More ▾
                </span>
            </div>

            {/* Sectioned Dropdown */}
            <div style={dropdownMenu}>
                {/* SERVICES */}
                <div>
                    <div style={sectionHeader}>Services</div>
                    <div style={dropdownItem} onClick={() => navigate("/services")}>Custom Website Design</div>
                    <div style={dropdownItem} onClick={() => navigate("/services")}>UI/UX Design</div>
                    <div style={dropdownItem} onClick={() => navigate("/services")}>Branding & Identity</div>
                    <div style={dropdownItem} onClick={() => navigate("/services")}>Digital Assets</div>
                </div>

                {/* COMPANY */}
                <div>
                    <div style={sectionHeader}>Company</div>
                    <div style={dropdownItem} onClick={() => navigate("/about")}>About Us</div>
                    <div style={dropdownItem} onClick={() => navigate("/portfolio")}>Portfolio</div>
                    <div style={dropdownItem} onClick={() => navigate("/contact")}>Contact</div>
                </div>

                {/* RESOURCES */}
                <div>
                    <div style={sectionHeader}>Resources</div>
                    <div style={dropdownItem} onClick={() => navigate("/pricing")}>Pricing</div>
                    <div style={dropdownItem} onClick={() => navigate("/faq")}>FAQs</div>
                    <div style={dropdownItem} onClick={() => navigate("/policies")}>Policies</div>
                    <div style={dropdownItem} onClick={() => navigate("/support")}>Support</div>
                </div>

                {/* CLIENT PORTAL */}
                <div>
                    <div style={sectionHeader}>Client Portal</div>
                    <div style={dropdownItem} onClick={() => navigate("/dashboard")}>Dashboard</div>
                    <div style={dropdownItem} onClick={() => navigate("/appointments")}>Appointments</div>
                    <div style={dropdownItem} onClick={() => navigate("/billing")}>Billing</div>
                </div>

                {/* ADMIN */}
                <div>
                    <div style={sectionHeader}>Admin</div>
                    <div style={dropdownItem} onClick={() => navigate("/admin")}>Admin Login</div>
                </div>
            </div>
        </nav>
    );
}
