export function getThemeSettings() {
    const saved = JSON.parse(localStorage.getItem("themeSettings"));

    return saved || {
        // Core neon theme colors
        primaryColor: "#00eaff",
        backgroundColor: "#050510",
        accentColor: "#ff00ff",
        textColor: "#ffffff",

        // Glow intensity
        glowStrength: 15,

        // Animation settings
        animationsEnabled: true,
        animationStyle: "fade",      // fade | slide-up | glow-pulse
        animationSpeed: "normal"     // slow | normal | fast
    };
}