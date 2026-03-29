import { getThemeSettings } from "../theme";

export default function Contact() {
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
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
  };

  const card = {
    background: theme.cardBackground,
    borderRadius: "14px",
    padding: "30px",
    boxShadow: `0 0 20px ${theme.primaryColor}33`,
    border: `1px solid ${theme.primaryColor}55`,
  };

  const label = {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "6px",
    color: theme.primaryColor,
  };

  const input = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: `1px solid ${theme.primaryColor}55`,
    background: theme.backgroundColor,
    color: theme.accentColor,
    marginBottom: "20px",
    fontSize: "16px",
  };

  const textarea = {
    ...input,
    height: "140px",
    resize: "vertical",
  };

  const button = {
    padding: "14px 24px",
    background: theme.primaryColor,
    color: theme.backgroundColor,
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: `0 0 12px ${theme.primaryColor}`,
    transition: "transform 0.2s ease",
  };

  return (
    <div style={page}>
      <div style={header}>Contact Us</div>
      <div style={subheader}>
        Have a project in mind? Let’s bring your brand to life.  
        Reach out using the form below — we’ll get back to you soon.
      </div>

      <div style={grid}>
        {/* Contact Info */}
        <div style={card}>
          <h3 style={{ color: theme.primaryColor, marginBottom: "20px" }}>
            Contact Information
          </h3>

          <p><strong>📞 Phone:</strong> (coming soon)</p>
          <p><strong>📧 Email:</strong> hello@finaldigitaldraft.com</p>

          <div style={{ marginTop: "20px" }}>
            <p><strong>Follow Us:</strong></p>
            <p style={{ opacity: 0.6 }}>Facebook (coming soon)</p>
            <p style={{ opacity: 0.6 }}>Instagram (coming soon)</p>
          </div>
        </div>

        {/* Contact Form */}
        <div style={card}>
          <h3 style={{ color: theme.primaryColor, marginBottom: "20px" }}>
            Send a Message
          </h3>

          <label style={label}>Your Name</label>
          <input type="text" style={input} placeholder="John Doe" />

          <label style={label}>Your Email</label>
          <input type="email" style={input} placeholder="you@example.com" />

          <label style={label}>Your Message</label>
          <textarea style={textarea} placeholder="Tell us about your project..." />

          <button style={button}>Send Message</button>
        </div>
      </div>
    </div>
  );
}
