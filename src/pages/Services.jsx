import './Services.css';

export default function Services() {
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
  // RENDER
  // --------------------------------------------------------
  return (
    <div className="services-page">
      
      {/* Introduction Block */}
      <div className="header-container">
        <div className="header">Our Services</div>
        <div className="subtext">
          From raw conceptual blueprints to finalized production assets, we engineer complete digital ecosystems.
        </div>
      </div>

      {/* 3-Column Services Grid */}
      <div className="grid">
        {coreServices.map((service) => (
          <div key={service.id} className="card">
            <div>
              <div className="card-tagline">{service.tagline}</div>
              <div className="card-title">{service.title}</div>
            </div>
            <div className="card-description">{service.description}</div>
          </div>
        ))}
      </div>

      {/* Dedicated Masterclass Banner */}
      <div className="banner">
        <div className="banner-left">
          <div className="banner-subtitle">{courseShowcase.subtitle}</div>
          <div className="banner-title">{courseShowcase.title}</div>
          <div className="banner-description">{courseShowcase.description}</div>
        </div>

        <div className="banner-right">
          <ul className="module-list">
            {courseShowcase.modules.map((module, index) => (
              <li key={index} className="module-item">
                <span className="bullet-icon">✓</span>
                <span>{module}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}