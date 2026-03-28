import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  // Cart State
  const [cart, setCart] = useState([]);

  // ✅ Load cart from localStorage on first render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add to cart
  const addToCart = (service) => {
    setCart((prev) => [...prev, service]);
  };

  // ✅ Remove from cart
  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // ✅ Load services from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("services"));
    setServices(saved || []);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        Our Services
      </h1>

      <p style={{ fontSize: "1.2rem", opacity: 0.9, marginBottom: "40px" }}>
        Explore the digital solutions we offer to help elevate your brand.
      </p>

      {/* ✅ Services Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {services.length === 0 && (
          <p style={{ opacity: 0.7 }}>No services added yet.</p>
        )}

        {services.map((service, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid #444",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            {service.image && (
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "15px",
                }}
              />
            )}

            <h3 style={{ marginBottom: "10px", color: "#0ff" }}>
              {service.title}
            </h3>

            <p style={{ opacity: 0.9 }}>{service.description}</p>

            <button
              onClick={() => addToCart(service)}
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                background: "#0ff",
                color: "#000",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* ✅ Right-side Cart Panel */}
      <div
        style={{
          position: "fixed",
          top: "120px",
          right: "20px",
          width: "300px",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid #444",
          borderRadius: "10px",
          padding: "20px",
          maxHeight: "70vh",
          overflowY: "auto",
          backdropFilter: "blur(10px)",
          zIndex: 999,
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#0ff" }}>Your Cart</h3>

        {cart.length === 0 && (
          <p style={{ opacity: 0.7 }}>Your cart is empty.</p>
        )}

        {cart.map((item, index) => (
          <div
            key={index}
            style={{ borderBottom: "1px solid #333", padding: "10px 0" }}
          >
            <p>{item.title}</p>

            <button
              onClick={() => removeFromCart(index)}
              style={{
                marginTop: "5px",
                padding: "5px 10px",
                background: "#f55",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "0.8rem",
              }}
            >
              Remove
            </button>
          </div>
        ))}

        {/* ✅ Checkout Button */}
        {cart.length > 0 && (
          <button
            onClick={() => navigate("/checkout")}
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "12px",
              background: "#0ff",
              color: "#000",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Checkout
          </button>
        )}
      </div>

      {/* ✅ Start Your Project Button */}
      <button
        onClick={() => navigate("/start-project")}
        style={{
          marginTop: "50px",
          padding: "15px 30px",
          fontSize: "1.2rem",
          background: "#0ff",
          color: "#000",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "0.3s",
        }}
      >
        Start Your Project
      </button>
    </div>
  );
}