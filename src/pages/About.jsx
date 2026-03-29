import { getThemeSettings } from "../theme";

export default function About() {
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

  const section = {
    marginBottom: "50px",
    maxWidth: "900px",
  };

  const title = {
    fontSize: "28px",
    fontWeight: "700",
    color: theme.primaryColor,
    marginBottom: "10px",
  };

  const text = {
    fontSize: "18px",
    opacity: 0.85,
    lineHeight: "1.7",
  };

  return (
    <div style={page}>
      <div style={header}>About Us</div>
      <div style={subheader}>
        Final Digital Draft is a remote digital‑branding studio built for small
        businesses, creators, and entrepreneurs who want clean, modern, and
        intentional design without the agency overwhelm.
      </div>

      {/* Who We Are */}
      <div style={section}>
        <div style={title}>Who We Are</div>
        <div style={text}>
          We’re a distributed team of designers, developers, and creative
          problem‑solvers working from different states across the U.S. Our
          remote structure allows us to collaborate flexibly, stay agile, and
          bring diverse perspectives to every project.
          <br /><br />
          Whether we’re building a brand identity, designing a website, or
          crafting a digital experience, our goal is always the same: create
          work that feels intentional, polished, and uniquely you.
        </div>
      </div>

      {/* What We Believe */}
      <div style={section}>
        <div style={title}>What We Believe</div>
        <div style={text}>
          Great design isn’t just visuals — it’s clarity, strategy, and
          storytelling. We believe in:
          <br /><br />
          • Clean, modern design that stands out<br />
          • Systems that make your brand feel cohesive<br />
          • Websites that are fast, responsive, and easy to use<br />
          • Branding that feels personal, not cookie‑cutter<br />
          • Collaboration that feels human and supportive
        </div>
      </div>

      {/* Our Mission */}
      <div style={section}>
        <div style={title}>Our Mission</div>
        <div style={text}>
          Our mission is simple: empower small businesses and creators with
          branding and digital experiences that look professional, feel
          intentional, and help you grow with confidence.
          <br /><br />
          No jargon. No gatekeeping. Just clean, beautiful work built with care.
        </div>
      </div>
    </div>
  );
}
