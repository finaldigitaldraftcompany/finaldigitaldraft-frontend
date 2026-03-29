import { getThemeSettings } from "../theme";

export default function Pricing() {
  const theme = getThemeSettings();

  const page = {
    width: "100%",
    minHeight: "100vh",
    background: theme.backgroundColor,
    padding: "60px 40px",
    color: theme.accentColor,
    fontFamily: theme.fontFamily,
  };

  const header = {
    fontSize: "42px",
    fontWeight: "700",
    color: theme.primaryColor,
    marginBottom: "20px",
    textShadow: `0 0 12px ${theme.primaryColor}`,
  };

  const subheader = {
    fontSize: "20px",
    opacity: 0.8,
    marginBottom: "40px",
    maxWidth: "700px",
    lineHeight: "1.6",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  };

  const card = {
    background: theme.cardBackground,
    borderRadius: "14px",
    padding: "30px",
    boxShadow: `0 0 20px ${theme.primaryColor}33`,
    border: `1px solid ${theme.primaryColor}55`,
  };

  const cardTitle = {
    fontSize: "24px",
    fontWeight: "700",
    color: theme.primaryColor,
    marginBottom: "10px",
  };

  const price = {
    fontSize: "32px",
    fontWeight: "800",
    marginBottom: "20px",
    color: theme.accentColor,
  };

  const list = {
    fontSize: "16px",
    lineHeight: "1.6",
    opacity: 0.85,
  };

  return (
    <div style={page}>
      <div style={header}>Pricing</div>
      <div style={subheader}>
        Transparent, value‑driven pricing designed for small businesses, creators,
        and growing brands. Every project includes strategy, design, and a fully
        polished digital experience.
      </div>

      <div style={grid}>
        {/* Starter */}
        <div style={card}>
          <div style={cardTitle}>Starter Brand Kit</div>
          <div style={price}>$499</div>
          <div style={list}>
            • Logo + Color Palette<br />
            • Typography Selection<br />
            • Basic Brand Guide<br />
            • Social Media Profile Assets<br />
            • 3 Revisions
          </div>
        </div>

        {/* Professional */}
        <div style={card}>
          <div style={cardTitle}>Professional Identity</div>
          <div style={price}>$1,499</div>
          <div style={list}>
            • Full Brand Identity System<br />
            • Logo Suite + Variations<br />
            • Brand Voice & Messaging<br />
            • Social Media Templates<br />
            • Business Card + Print Assets<br />
            • 5 Revisions
          </div>
        </div>

        {/* Web Design */}
        <div style={card}>
          <div style={cardTitle}>Website Design</div>
          <div style={price}>$2,500+</div>
          <div style={list}>
            • Custom Website (5–8 pages)<br />
            • Mobile‑First Responsive Design<br />
            • SEO Setup + Optimization<br />
            • CMS or Admin Dashboard<br />
            • Hosting + Domain Setup<br />
            • Optional: E‑commerce
          </div>
        </div>

        {/* Full Brand System */}
        <div style={card}>
          <div style={cardTitle}>Full Brand System</div>
          <div style={price}>$4,500+</div>
          <div style={list}>
            • Complete Brand Identity<br />
            • Website + Admin Dashboard<br />
            • Social Media Package<br />
            • Brand Strategy + Positioning<br />
            • Launch Graphics + Assets<br />
            • Priority Support
          </div>
        </div>
      </div>
    </div>
  );
}
