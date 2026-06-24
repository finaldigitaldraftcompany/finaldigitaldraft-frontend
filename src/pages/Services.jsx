import { getThemeSettings } from "../theme";

export default function Services() {
  const theme = getThemeSettings();

  // --------------------------------------------------------
  // DATA STRUCTURES
  // --------------------------------------------------------
  const coreServices = [
    {
      id: "web-dev",
      title: "Web Development",
      tagline: "Performance-Driven Architecture",
      description: "Building ultra-fast, responsive web interfaces using modern frameworks. Scalable architecture tailored exactly to project requirements."
    },
    {
      id: "app-dev",
      title: "App Development",
      tagline: "Cross-Platform Execution",
      description: "Crafting seamless, cross-platform mobile and desktop applications. Native performance paired with elegant architecture."
    },
    {
      id: "branding",
      title: "Digital Branding",
      tagline: "Visual Identity & Strategy",
      description: "Executing distinct identities, assets, design systems, and premium visual layouts that give your digital platforms an elite edge."
    }
  ];

  const courseShowcase = {
    title: "The Brand Upstart Masterclass",
    subtitle: "INCLUDED WITH DIGITAL BRANDING",
    description: "We don't just engineer your assets; we empower your business. This exclusive digital course walks you through launching your new brand, maintaining flawless visual consistency across channels, and tracking growth metrics.",
    modules: [
      "Asset Management Mastery (Using your design tokens & UI kits)",
      "The Digital Launch Blueprint & Market Positioning",
      "Growth & Traffic Analytics Foundations"
    ]
  };

  // --------------------------------------------------------
  // STYLING MATRIX (Preserving getThemeSettings)
  // --------------------------------------------------------
  const styles = {
    page: {
      width: "100%",
      minHeight: "100vh",
      background: theme.backgroundColor,
      padding: "60px 8%",
      color: theme.accentColor,
      fontFamily: theme.fontFamily,
      boxSizing: "border-box"
    },
    headerContainer: {
      marginBottom: "50px",
      borderBottom: `1px solid ${theme.primaryColor}22`,
      paddingBottom: "25px"
    },
    header: {
      fontSize: "42px",
      fontWeight: "800",
      color: theme.primaryColor,
      marginBottom: "12px",
      textShadow: `0 0 12px ${theme.primaryColor}`,
    },
    subtext: {
      fontSize: "18px",
      opacity: 0.7,
      maxWidth: "650px",
      lineHeight: "1.6",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "30px",
      marginBottom: "60px",
    },
    card: {
      background: "rgba(255, 255, 255, 0.02)",
      border: `1px solid ${theme.primaryColor}18`,
      borderRadius: "12px",
      padding: "35px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    cardTagline: {
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "1.5px",
      color: theme.primaryColor,
      opacity: 0.8,
      marginBottom: "8px",
      fontWeight: "600"
    },
    cardTitle: {
      fontSize: "24px",
      fontWeight: "700",
      color: theme.primaryColor,
      marginBottom: "16px",
    },
    cardDescription: {
      fontSize: "15px",
      opacity: 0.75,
      lineHeight: "1.6",
    },
    // Approach B: Widescreen Banner Styles
    banner: {
      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
      border: `1px solid ${theme.primaryColor}28`,
      borderRadius: "16px",
      padding: "40px",
      display: "flex",
      flexWrap: "wrap",
      gap: "40px",
      alignItems: "center",
      marginTop: "20px"
    },
    bannerLeft: {
      flex: "1 1 400px",
    },
    bannerSubtitle: {
      fontSize: "11px",
      fontWeight: "800",
      letterSpacing: "2px",
      color: theme.primaryColor,
      marginBottom: "8px"
    },
    bannerTitle: {
      fontSize: "28px",
      fontWeight: "800",
      color: theme.primaryColor,
      marginBottom: "16px",
      textShadow: `0 0 8px ${theme.primaryColor}55`,
    },
    bannerDescription: {
      fontSize: "15px",
      opacity: 0.8,
      lineHeight: "1.6",
    },
    bannerRight: {
      flex: "1 1 300px",
      background: "rgba(0, 0, 0, 0.15)",
      padding: "30px",
      borderRadius: "12px",
      borderLeft: `3px solid ${theme.primaryColor}`
    },
    moduleList: {
      listStyle: "none",
      padding: 0,
      margin: 0
    },
    moduleItem: {
      fontSize: "14px",
      opacity: 0.85,
      marginBottom: "12px",
      lineHeight: "1.4",
      display: "flex",
      alignItems: "flex-start",
      gap: "10px"
    },
    bulletIcon: {
      color: theme.primaryColor,
      fontWeight: "bold"
    }
  };

  // --------------------------------------------------------
  // RENDER
  // --------------------------------------------------------
  return (
    <div style={styles.page}>
      
      {/* Introduction Block */}
      <div style={styles.headerContainer}>
        <div style={styles.header}>Our Services</div>
        <div style={styles.subtext}>
          From raw conceptual blueprints to finalized production assets, we engineer complete digital ecosystems.
        </div>
      </div>

      {/* 3-Column Services Grid */}
      <div style={styles.grid}>
        {coreServices.map((service) => (
          <div key={service.id} style={styles.card}>
            <div>
              <div style={styles.cardTagline}>{service.tagline}</div>
              <div style={styles.cardTitle}>{service.title}</div>
            </div>
            <div style={styles.cardDescription}>{service.description}</div>
          </div>
        ))}
      </div>

      {/* Approach B: Dedicated Masterclass Banner */}
      <div style={styles.banner}>
        <div style={styles.bannerLeft}>
          <div style={styles.bannerSubtitle}>{courseShowcase.subtitle}</div>
          <div style={styles.bannerTitle}>{courseShowcase.title}</div>
          <div style={styles.bannerDescription}>{courseShowcase.description}</div>
        </div>

        <div style={styles.bannerRight}>
          <ul style={styles.moduleList}>
            {courseShowcase.modules.map((module, index) => (
              <li key={index} style={styles.moduleItem}>
                <span style={styles.bulletIcon}>✓</span>
                <span>{module}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}