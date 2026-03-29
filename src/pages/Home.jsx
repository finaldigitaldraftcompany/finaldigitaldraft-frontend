import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css"; // adjust if you place it elsewhere
import heroImage from "../assets/hero-image.png"; // optional image

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-inner">

          <div className="hero-text">
            <h1 className="hero-title">
              Build. Launch. Grow.  
              <span className="highlight"> Digitally.</span>
            </h1>

            <p className="hero-subtitle">
              Final Digital Draft helps businesses create stunning websites, 
              powerful branding, and seamless digital experiences.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn" onClick={() => navigate("/services")}>
                Explore Services
              </button>

              <button className="secondary-btn" onClick={() => navigate("/contact")}>
                Get a Quote
              </button>
            </div>
          </div>

          {/* Optional hero image */}
          <div className="hero-image-wrapper">
            <img src={heroImage} alt="Digital Design" className="hero-image" />
          </div>

        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="services-preview">
        <h2 className="section-title">What We Do</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>Web Design</h3>
            <p>Custom, responsive, and built to convert.</p>
          </div>

          <div className="service-card">
            <h3>Brand Identity</h3>
            <p>Logos, color systems, and full brand kits.</p>
          </div>

          <div className="service-card">
            <h3>Website Management</h3>
            <p>Monthly updates, hosting, and maintenance.</p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Ready to Start Your Project?</h2>
        <p>Let’s bring your digital vision to life.</p>

        <button className="primary-btn" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </section>

    </div>
  );
}
