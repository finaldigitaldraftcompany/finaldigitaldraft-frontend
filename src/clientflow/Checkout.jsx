import { useState, useEffect } from "react";

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [details, setDetails] = useState("");
  const [sendCopy, setSendCopy] = useState(false);
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ✅ Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    setCart(savedCart || []);
  }, []);

  // ✅ Calculate total
  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  // ✅ Validate fields
  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!agree) newErrors.agree = "You must agree before continuing.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle Stripe Checkout
  const handlePayment = async () => {
    if (!validate()) return;

    setLoading(true);

    // ✅ Save name/email for next time
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    try {
      const response = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // ✅ Redirect to Stripe Checkout
      } else {
        alert("Unable to start checkout. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Checkout</h1>

      {/* ✅ Order Summary */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "30px",
          border: "1px solid #444",
        }}
      >
        <h2 style={{ marginBottom: "15px", color: "#0ff" }}>Order Summary</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #333",
                padding: "10px 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{item.title}</span>
              <span>${item.price}</span>
            </div>
          ))
        )}

        <h3 style={{ marginTop: "20px", fontSize: "1.3rem" }}>
          Total: <span style={{ color: "#0ff" }}>${total}</span>
        </h3>
      </div>

      {/* ✅ Customer Info */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid #444",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ marginBottom: "15px", color: "#0ff" }}>Your Information</h2>

        {/* Name */}
        <label style={{ display: "block", marginBottom: "10px" }}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #333",
              background: "#222",
              color: "white",
            }}
          />
        </label>
        {errors.name && <p style={{ color: "red", marginTop: "-5px" }}>{errors.name}</p>}

        {/* Email */}
        <label style={{ display: "block", marginBottom: "10px" }}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #333",
              background: "#222",
              color: "white",
            }}
          />
        </label>
        {errors.email && <p style={{ color: "red", marginTop: "-5px" }}>{errors.email}</p>}

        {/* Project Details */}
        <label style={{ display: "block", marginBottom: "10px" }}>
          Project Details (optional):
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows="4"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #333",
              background: "#222",
              color: "white",
            }}
          />
        </label>

        {/* Send Copy */}
        <label style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
          <input
            type="checkbox"
            checked={sendCopy}
            onChange={() => setSendCopy(!sendCopy)}
            style={{ marginRight: "10px" }}
          />
          Send me a copy of my invoice
        </label>

        {/* Agree to terms */}
        <label style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            style={{ marginRight: "10px" }}
          />
          I agree to the terms and conditions
        </label>
        {errors.agree && <p style={{ color: "red" }}>{errors.agree}</p>}
      </div>

      {/* ✅ Payment Button */}
      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          width: "100%",
          padding: "15px",
          fontSize: "1.2rem",
          background: loading ? "#555" : "#0ff",
          color: "#000",
          border: "none",
          borderRadius: "8px",
          cursor: loading ? "not-allowed" : "pointer",
          fontWeight: "bold",
        }}
      >
        {loading ? "Redirecting..." : "Proceed to Payment"}
      </button>
    </div>
  );
}