import { getThemeSettings } from "../theme";

export default function Services() {
  const theme = getThemeSettings();

  const page = {
    width: "100%",
    minHeight: "100vh",
    background: theme.backgroundColor,
    padding: "40px",
    color: theme.accentColor,
    fontFamily: theme.fontFamily,
  };

  const header = {
    fontSize: "36px",
    fontWeight: "700",
    color: theme.primaryColor,
    marginBottom: "20px",
    textShadow: `0 0 12px ${theme.primaryColor}`,
  };

  const text = {
    fontSize: "18px",
    opacity: 0.8,
    maxWidth: "700px",
    lineHeight: "1.6",
  };

  return (
    <div style={page}>
      <div style={header}>Our Services</div>
      <div style={text}>
        This is a placeholder Services page.  
        You can customize this section later with your full service offerings,
        pricing tiers, and detailed descriptions.
      </div>
    </div>
  );
}
