import { getThemeSettings } from "../theme";

export default function Portfolio() {
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
    padding: "20px",
    boxShadow: `0 0 20px ${theme.primaryColor}33`,
    border: `1px solid ${theme.primaryColor}55`,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const cardHover = {
    transform: "translateY(-6px)",
    boxShadow: `0 0 25px ${theme.primaryColor}66`,
  };

  const projectTitle = {
    fontSize: "20px",
    fontWeight: "700",
    color: theme.primaryColor,
    marginBottom: "10px",
  };

  const projectDesc = {
    fontSize: "16px",
    opacity: 0.85,
    lineHeight: "1.6",
  };

  return (
    <div style={page}>
      <div style={header}>Portfolio</div>
      <div style={subheader}>
        A curated selection of branding, web design, and digital identity
        projects. Each piece reflects strategy, creativity, and a commitment to
        clean, modern design.
      </div>

      <div style={grid}>
        {/* Project 1 */}
        <div
          style={card}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, card)}
        >
          <div style={projectTitle}>Brand Identity — Aurora Wellness</div>
          <div style={projectDesc}>
            Full brand identity system including logo suite, color palette,
            typography, and social media templates.
          </div>
        </div>

        {/* Project 2 */}
        <div
          style={card}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, card)}
        >
          <div style={projectTitle}>Website Design — Nova Creative Co.</div>
          <div style={projectDesc}>
            Custom 7‑page responsive website with CMS integration, SEO setup,
            and brand‑aligned UI components.
          </div>
        </div>

        {/* Project 3 */}
        <div
          style={card}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, card)}
        >
          <div style={projectTitle}>E‑Commerce — Stellar Apparel</div>
          <div style={projectDesc}>
            Full e‑commerce build with product pages, cart system, checkout
            flow, and mobile‑first design.
          </div>
        </div>

        {/* Project 4 */}
        <div
          style={card}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHover)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, card)}
        >
          <div style={projectTitle}>Social Media Kit — Lunar Studio</div>
          <div style={projectDesc}>
            Complete social media branding package including templates, reels
            covers, highlight icons, and launch graphics.
          </div>
        </div>
      </div>
    </div>
  );
}
