import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getThemeSettings } from "../theme";
import { getBotResponse } from "../bot/brain";

export default function Home() {
    const [content, setContent] = useState({});
    const navigate = useNavigate();

    // ✅ Load theme settings
    const theme = getThemeSettings();

    // ✅ Build animation classes
    const baseAnim = theme.animationsEnabled
        ? `animate-${theme.animationStyle}`
        : "";
    const speedClass = theme.animationsEnabled
        ? `anim-speed-${theme.animationSpeed}`
        : "";
    const animClass = `${baseAnim} ${speedClass}`.trim();

    // ✅ Chatbot state
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    // ✅ NEW: Admin detection
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    // ✅ Load homepage content
    useEffect(() => {
        const savedHome = JSON.parse(localStorage.getItem("homeContent"));
        const savedServices = JSON.parse(localStorage.getItem("services"));

        setContent({
            ...savedHome,
            services: savedServices || []
        });
    }, []);

    // ✅ Bot response logic
    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { from: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);

        const response = getBotResponse(input, navigate);
        setMessages((prev) => [...prev, { from: "bot", text: response }]);

        setInput("");
    };

    return (
        <div
            className="home-container"
            style={{
                background: content.backgroundImage
                    ? `url(${content.backgroundImage})`
                    : content.backgroundColor || "#000",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                color: content.textColor || "#fff",
                fontFamily: content.fontFamily || "Arial",
                fontSize: content.fontSize ? `${content.fontSize}px` : "24px",
                overflowX: "hidden",
                width: "100%",
                paddingTop: "100px" // ✅ space for fixed header
            }}
        >

            {/* ✅ ADMIN DASHBOARD BUTTON (only visible to admins) */}
            {isAdmin && (
                <button
                    onClick={() => navigate("/admin")}
                    style={{
                        position: "fixed",
                        top: "110px",
                        right: "20px",
                        padding: "10px 18px",
                        background: theme.primaryColor,
                        color: "#000",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "700",
                        zIndex: 9999,
                        boxShadow: `0 0 15px ${theme.primaryColor}`
                    }}
                >
                    Admin Dashboard
                </button>
            )}

            {/* ✅ Floating Chat Button */}
            <div
                onClick={() => setChatOpen(true)}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: theme.primaryColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: `0 0 15px ${theme.primaryColor}`,
                    zIndex: 9999,
                    fontSize: "28px"
                }}
            >
                💬
            </div>

            {/* ✅ Chat Window */}
            {chatOpen && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "100px",
                        right: "20px",
                        width: "300px",
                        height: "400px",
                        background: "#111",
                        border: `1px solid ${theme.primaryColor}`,
                        borderRadius: "10px",
                        boxShadow: `0 0 20px ${theme.primaryColor}`,
                        padding: "15px",
                        display: "flex",
                        flexDirection: "column",
                        zIndex: 9999
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "10px"
                        }}
                    >
                        <strong style={{ color: theme.primaryColor }}>
                            FinalDraft Assistant
                        </strong>

                        <button
                            onClick={() => setChatOpen(false)}
                            style={{
                                background: "transparent",
                                border: "none",
                                color: theme.accentColor,
                                cursor: "pointer",
                                fontSize: "18px"
                            }}
                        >
                            ✖
                        </button>
                    </div>

                    <div
                        style={{
                            flex: 1,
                            overflowY: "auto",
                            marginBottom: "10px",
                            color: "#fff"
                        }}
                    >
                        {messages.map((msg, i) => (
                            <div key={i} style={{ marginBottom: "8px" }}>
                                <strong
                                    style={{
                                        color:
                                            msg.from === "bot"
                                                ? theme.accentColor
                                                : theme.primaryColor
                                    }}
                                >
                                    {msg.from === "bot" ? "Bot:" : "You:"}
                                </strong>{" "}
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Ask me something..."
                        style={{
                            padding: "8px",
                            borderRadius: "6px",
                            border: `1px solid ${theme.primaryColor}`,
                            background: "#000",
                            color: "#fff"
                        }}
                    />
                </div>
            )}

            {/* ✅ HERO SECTION */}
            <section
                className={`hero-section ${animClass}`}
                style={{
                    position: "relative",
                    width: "100%",
                    minHeight: "70vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "40px 20px",
                    margin: "0 auto"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.55)",
                        backdropFilter: "blur(2px)"
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        maxWidth: "900px"
                    }}
                >

                    {content.heroBrandImage && (
                        <img
                            src={content.heroBrandImage}
                            alt="Brand"
                            style={{
                                width: "100%",
                                maxWidth: "500px",
                                objectFit: "contain",
                                marginBottom: "25px",
                                borderRadius: "12px",
                                boxShadow: `0 0 ${theme.glowStrength}px ${theme.primaryColor}`
                            }}
                        />
                    )}

                    <h1 style={{ color: theme.primaryColor, marginBottom: "10px" }}>
                        {content.heroTitle || "Welcome to Final Digital Draft"}
                    </h1>

                    <h3 style={{ color: theme.accentColor, marginBottom: "20px" }}>
                        {content.heroSubtitle || "Your digital vision, brought to life"}
                    </h3>

                    <p style={{ marginBottom: "30px" }}>
                        {content.introText ||
                            "We help businesses build modern, powerful online experiences."}
                    </p>

                    <button
                        onClick={() => navigate("/services")}
                        style={{
                            padding: "12px 28px",
                            background: theme.primaryColor,
                            color: "#000",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontWeight: "700",
                            fontSize: "18px",
                            boxShadow: `0 0 ${theme.glowStrength}px ${theme.primaryColor}`
                        }}
                    >
                        View Our Services
                    </button>
                </div>
            </section>

            {/* ✅ SERVICES PREVIEW */}
            <section
                className={`services-preview ${animClass}`}
                style={{ padding: "20px", textAlign: "center" }}
            >
                <h2 style={{ color: theme.primaryColor, marginBottom: "30px" }}>
                    What We Offer
                </h2>

                <div
                    className="service-cards"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "25px",
                        maxWidth: "1200px",
                        margin: "0 auto"
                    }}
                >
                    {(content.services || []).map((service, index) => (
                        <div
                            key={index}
                            className={`service-card ${animClass}`}
                            style={{
                                background: "rgba(0,0,0,0.4)",
                                border: `1px solid ${theme.primaryColor}`,
                                borderRadius: "10px",
                                padding: "20px",
                                boxShadow: `0 0 ${theme.glowStrength}px ${theme.primaryColor}`,
                                transition:
                                    "transform 0.3s ease, box-shadow 0.3s ease",
                                cursor: "pointer"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.03)";
                                e.currentTarget.style.boxShadow = `0 0 ${
                                    theme.glowStrength + 10
                                }px ${theme.accentColor}`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = `0 0 ${theme.glowStrength}px ${theme.primaryColor}`;
                            }}
                        >
                            {service.image && (
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    style={{
                                        width: "100%",
                                        height: "160px",
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                        marginBottom: "15px"
                                    }}
                                />
                            )}

                            <h3
                                style={{
                                    color: theme.accentColor,
                                    marginBottom: "10px"
                                }}
                            >
                                {service.title}
                            </h3>

                            <p style={{ color: theme.textColor }}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}