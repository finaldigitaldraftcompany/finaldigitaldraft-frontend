import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminEditor.css";

export default function EditTheme() {
    const navigate = useNavigate();

    // ✅ Full theme object (future‑proof)
    const [theme, setTheme] = useState({
        primaryColor: "#00eaff",
        backgroundColor: "#050510",
        accentColor: "#ff00ff",
        textColor: "#ffffff",
        glowStrength: 15,
        fontFamily: "Poppins, Arial, sans-serif",
        fontSize: 18,
        animationsEnabled: true,
        animationStyle: "fade",
        animationSpeed: "medium",
        buttonRadius: 6,
        sectionSpacing: 40
    });

    // ✅ Load saved theme on mount
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("themeSettings"));
        if (saved) {
            setTheme((prev) => ({ ...prev, ...saved }));
        }
    }, []);

    // ✅ Update a single field
    const update = (field, value) => {
        setTheme((prev) => ({ ...prev, [field]: value }));
    };

    // ✅ Save theme
    const handleSave = () => {
        localStorage.setItem("themeSettings", JSON.stringify(theme));

        const shouldRedirect = window.confirm(
            "Theme saved successfully! Click OK to go to the Home Page, or Cancel to stay."
        );

        if (shouldRedirect) {
            navigate("/");
        }
    };

    // ✅ Admin‑only protection
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    if (!isAdmin) {
        return (
            <div style={{ padding: "40px", color: "#fff", background: "#000", minHeight: "100vh" }}>
                <h2>Access Denied</h2>
                <p>This page is only available to admins.</p>
            </div>
        );
    }

    return (
        <div className="editor-container">
            <h1>Theme Settings</h1>

            {/* ✅ COLORS */}
            <h2>Colors</h2>
            <div className="input-group">
                <label>Primary Neon Color</label>
                <input type="color" value={theme.primaryColor} onChange={(e) => update("primaryColor", e.target.value)} />
            </div>

            <div className="input-group">
                <label>Background Color</label>
                <input type="color" value={theme.backgroundColor} onChange={(e) => update("backgroundColor", e.target.value)} />
            </div>

            <div className="input-group">
                <label>Accent Color</label>
                <input type="color" value={theme.accentColor} onChange={(e) => update("accentColor", e.target.value)} />
            </div>

            <div className="input-group">
                <label>Text Color</label>
                <input type="color" value={theme.textColor} onChange={(e) => update("textColor", e.target.value)} />
            </div>

            {/* ✅ GLOW */}
            <h2>Glow & Effects</h2>
            <div className="input-group">
                <label>Glow Strength (px)</label>
                <input
                    type="range"
                    min="0"
                    max="60"
                    value={theme.glowStrength}
                    onChange={(e) => update("glowStrength", Number(e.target.value))}
                />
                <span>{theme.glowStrength}px</span>
            </div>

            {/* ✅ TYPOGRAPHY */}
            <h2>Typography</h2>
            <div className="input-group">
                <label>Font Family</label>
                <input
                    type="text"
                    value={theme.fontFamily}
                    onChange={(e) => update("fontFamily", e.target.value)}
                />
            </div>

            <div className="input-group">
                <label>Base Font Size (px)</label>
                <input
                    type="number"
                    value={theme.fontSize}
                    onChange={(e) => update("fontSize", Number(e.target.value))}
                />
            </div>

            {/* ✅ ANIMATIONS */}
            <h2>Animations</h2>
            <div className="input-group">
                <label>
                    <input
                        type="checkbox"
                        checked={theme.animationsEnabled}
                        onChange={(e) => update("animationsEnabled", e.target.checked)}
                    />
                    Enable Animations
                </label>
            </div>

            <div className="input-group">
                <label>Animation Style</label>
                <select value={theme.animationStyle} onChange={(e) => update("animationStyle", e.target.value)}>
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                    <option value="zoom">Zoom</option>
                    <option value="float">Float</option>
                </select>
            </div>

            <div className="input-group">
                <label>Animation Speed</label>
                <select value={theme.animationSpeed} onChange={(e) => update("animationSpeed", e.target.value)}>
                    <option value="slow">Slow</option>
                    <option value="medium">Medium</option>
                    <option value="fast">Fast</option>
                </select>
            </div>

            {/* ✅ BUTTON STYLE */}
            <h2>Buttons</h2>
            <div className="input-group">
                <label>Button Radius (px)</label>
                <input
                    type="range"
                    min="0"
                    max="30"
                    value={theme.buttonRadius}
                    onChange={(e) => update("buttonRadius", Number(e.target.value))}
                />
                <span>{theme.buttonRadius}px</span>
            </div>

            {/* ✅ LAYOUT */}
            <h2>Layout</h2>
            <div className="input-group">
                <label>Section Spacing (px)</label>
                <input
                    type="range"
                    min="10"
                    max="120"
                    value={theme.sectionSpacing}
                    onChange={(e) => update("sectionSpacing", Number(e.target.value))}
                />
                <span>{theme.sectionSpacing}px</span>
            </div>

            {/* ✅ ACTION BUTTONS */}
            <div className="actions">
                <button className="save-button" onClick={handleSave}>Save Theme</button>
            </div>

            <button className="home-button" onClick={() => navigate("/")}>Go to Home Page</button>

            {/* ✅ LIVE PREVIEW */}
            <div
                className="preview-box"
                style={{
                    background: theme.backgroundColor,
                    color: theme.textColor,
                    border: `1px solid ${theme.accentColor}`,
                    boxShadow: `0 0 ${theme.glowStrength}px ${theme.primaryColor}`,
                    fontFamily: theme.fontFamily,
                    padding: "20px",
                    marginTop: "30px",
                    borderRadius: "10px"
                }}
            >
                <h2 style={{ color: theme.primaryColor }}>Live Theme Preview</h2>
                <p>This is how your neon vibe will feel.</p>

                <button
                    style={{
                        marginTop: "15px",
                        padding: "10px 20px",
                        background: "transparent",
                        color: theme.accentColor,
                        border: `2px solid ${theme.accentColor}`,
                        borderRadius: `${theme.buttonRadius}px`,
                        cursor: "pointer",
                        boxShadow: `0 0 10px ${theme.accentColor}`,
                        fontWeight: "700"
                    }}
                >
                    Sample Button
                </button>
            </div>
        </div>
    );
}