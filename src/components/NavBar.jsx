import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getThemeSettings } from "../theme";
import logo from "../assets/Final Digital Draft Official Icon.png";

export default function NavBar() {
    const theme = getThemeSettings();
    const [navItems, setNavItems] = useState([]);

    // Load navigation from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("navItems");
        if (saved) {
            setNavItems(JSON.parse(saved));
        } else {
            // Default menu if nothing saved yet
            setNavItems([
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "About", path: "/about" },
                { label: "Portfolio", path: "/portfolio" },
                { label: "Pricing", path: "/pricing" },
                { label: "Contact", path: "/contact" }
            ]);
        }
    }, []);

    // ✅ Updated layout: centered, not fixed, spaced above hero image
    const navContainer = {
        position: "relative",
        width: "100%",
        background: `${theme.backgroundColor}dd`,
        backdropFilter: "blur(6px)",
        borderBottom: `1px solid ${theme.primaryColor}`,
        boxShadow: `0 0 ${theme.glowStrength}px ${theme.primaryColor}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 30px",
        marginBottom: "40px" // ✅ spacing above the big image
    };

    const brandContainer = {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        cursor: "pointer",
        marginRight: "40px" // ✅ spacing before nav links
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

    return (
        <nav style={navContainer}>
            {/* Logo + Brand */}
            <div
                style={brandContainer}
                onClick={() => (window.location.href = "/")}
            >
                <img src={logo} alt="Final Digital Draft Logo" style={logoStyle} />
                <span style={brandText}>Final Digital Draft</span>
            </div>

            {/* Dynamic Navigation Links */}
            <div style={navLinks}>
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        style={linkStyle}
                        onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
                        onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}