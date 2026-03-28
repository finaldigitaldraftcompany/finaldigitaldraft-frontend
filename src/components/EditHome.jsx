import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminEditor.css";

export default function EditHome() {
    const navigate = useNavigate();

    // Text content
    const [heroTitle, setHeroTitle] = useState("");
    const [heroSubtitle, setHeroSubtitle] = useState("");
    const [introText, setIntroText] = useState("");

    // Media
    const [heroImage, setHeroImage] = useState("");
    const [backgroundImage, setBackgroundImage] = useState("");

    // ✅ NEW: Branding / Lion Image
    const [heroBrandImage, setHeroBrandImage] = useState("");

    // Style settings
    const [fontFamily, setFontFamily] = useState("Arial");
    const [fontSize, setFontSize] = useState(24);
    const [textColor, setTextColor] = useState("#ffffff");
    const [backgroundColor, setBackgroundColor] = useState("#000000");

    // Load saved content
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("homeContent"));
        if (saved) {
            setHeroTitle(saved.heroTitle || "");
            setHeroSubtitle(saved.heroSubtitle || "");
            setIntroText(saved.introText || "");
            setHeroImage(saved.heroImage || "");
            setBackgroundImage(saved.backgroundImage || "");

            // ✅ Load branding image if it exists
            setHeroBrandImage(saved.heroBrandImage || "");

            setFontFamily(saved.fontFamily || "Arial");
            setFontSize(saved.fontSize || 24);
            setTextColor(saved.textColor || "#ffffff");
            setBackgroundColor(saved.backgroundColor || "#000000");
        }
    }, []);

    // Handle hero image upload
    const handleHeroImageChange = (file) => {
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => setHeroImage(reader.result);
        reader.readAsDataURL(file);
    };

    // Handle background image upload
    const handleBackgroundImageChange = (file) => {
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => setBackgroundImage(reader.result);
        reader.readAsDataURL(file);
    };

    // ✅ NEW: Handle branding image upload
    const handleBrandImageChange = (file) => {
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => setHeroBrandImage(reader.result);
        reader.readAsDataURL(file);
    };

    // Save everything
    const handleSave = () => {
        const content = {
            heroTitle,
            heroSubtitle,
            introText,
            heroImage,
            backgroundImage,

            // ✅ Save branding image
            heroBrandImage,

            fontFamily,
            fontSize,
            textColor,
            backgroundColor
        };

        localStorage.setItem("homeContent", JSON.stringify(content));

        const goHome = window.confirm(
            "Homepage updated! Click OK to return home and see the changes, or Cancel to continue editing."
        );

        if (goHome) {
            navigate("/");
            window.location.reload();
        }
    };

    return (
        <div className="editor-container">
            <h1>Edit Homepage</h1>

            {/* TEXT CONTENT */}
            <label>Hero Title</label>
            <input
                type="text"
                value={heroTitle}
                onChange={(e) => setHeroTitle(e.target.value)}
            />

            <label>Hero Subtitle</label>
            <input
                type="text"
                value={heroSubtitle}
                onChange={(e) => setHeroSubtitle(e.target.value)}
            />

            <label>Intro Paragraph</label>
            <textarea
                value={introText}
                onChange={(e) => setIntroText(e.target.value)}
            />

            {/* FONT OPTIONS */}
            <h2>Font Settings</h2>

            <label>Font Family</label>
            <select
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
            >
                <option value="Arial">Arial</option>
                <option value="Poppins">Poppins</option>
                <option value="Roboto">Roboto</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Georgia">Georgia</option>
                <option value="Courier New">Courier New</option>
            </select>

            <label>Font Size (px)</label>
            <input
                type="number"
                min="12"
                max="72"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
            />

            <label>Text Color</label>
            <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
            />

            {/* BACKGROUND OPTIONS */}
            <h2>Background Settings</h2>

            <label>Background Color</label>
            <input
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
            />

            <label>Background Image</label>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => handleBackgroundImageChange(e.target.files[0])}
            />

            {backgroundImage && (
                <div className="image-preview">
                    <img src={backgroundImage} alt="Background" />
                </div>
            )}

            {/* HERO IMAGE */}
            <h2>Hero Image</h2>

            <label>Upload Hero Image</label>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => handleHeroImageChange(e.target.files[0])}
            />

            {heroImage && (
                <div className="image-preview">
                    <img src={heroImage} alt="Hero" />
                </div>
            )}

            {/* ✅ NEW: BRANDING IMAGE */}
            <h2>Branding Image (Lion Graphic)</h2>

            <label>Upload Branding Image</label>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => handleBrandImageChange(e.target.files[0])}
            />

            {heroBrandImage && (
                <div className="image-preview">
                    <img src={heroBrandImage} alt="Branding" />
                </div>
            )}

            {/* SAVE BUTTON */}
            <button className="save-btn" onClick={handleSave}>
                Save Changes
            </button>

            {/* RETURN HOME */}
            <button
                className="home-button"
                onClick={() => navigate("/")}
                style={{ marginTop: "20px" }}
            >
                Go to Home Page
            </button>

            {/* LIVE PREVIEW */}
            <div
                className="preview-box"
                style={{
                    background: backgroundColor,
                    backgroundImage: backgroundImage
                        ? `url(${backgroundImage})`
                        : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: textColor,
                    fontFamily,
                    fontSize: `${fontSize}px`
                }}
            >
                {heroBrandImage && (
                    <img
                        src={heroBrandImage}
                        alt="Branding"
                        style={{
                            width: "100%",
                            borderRadius: "8px",
                            marginBottom: "10px"
                        }}
                    />
                )}

                {heroImage && (
                    <img
                        src={heroImage}
                        alt="Hero"
                        style={{
                            width: "100%",
                            borderRadius: "8px",
                            marginBottom: "10px"
                        }}
                    />
                )}

                <h2>{heroTitle}</h2>
                <p>{heroSubtitle}</p>
                <p>{introText}</p>
            </div>
        </div>
    );
}