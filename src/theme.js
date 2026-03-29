export function getThemeSettings() {
    const saved = JSON.parse(localStorage.getItem("themeSettings"));

    return saved || {
        // Completely neutral colors
        primaryColor: "transparent",
        backgroundColor: "transparent",
        accentColor: "inherit",
        textColor: "inherit",

        // No glow, no shadows
        glowStrength: 0,

        // Disable animations by default
        animationsEnabled: false,
        animationStyle: "none",
        animationSpeed: "normal"
    };
}
