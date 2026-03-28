import { useEffect, useState } from "react";

export default function Invoice() {
  const [cart, setCart] = useState([]);
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    setCart(savedCart || []);

    // Generate invoice number + date
    const random = Math.floor(100000 + Math.random() * 900000);
    setInvoiceNumber(`FD-${random}`);
    setDate(new Date().toLocaleDateString());
  }, []);

  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  // ✅ Send invoice to email
  const sendInvoiceEmail = async () => {
    if (!email) {
      alert("Please enter an email address.");
      return;
    }

    setSending(true);

    try {
      await fetch("http://localhost:5000/send-invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          invoiceNumber,
          date,
          cart,
          total,
        }),
      });

      alert("Invoice sent successfully!");
    } catch (error) {
      alert("Failed to send invoice. Please try again.");
    }

    setSending(false);
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
      <h1 style={{ fontSize: "2.5rem", color: "#0ff", marginBottom: "20px" }}>
        Invoice
      </h1>

      {/* Header */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid #444",
          marginBottom: "30px",
        }}
      >
        <p>
          Invoice Number: <strong>{invoiceNumber}</strong>
        </p>
        <p>
          Date: <strong>{date}</strong>
        </p>
      </div>

      {/* Items */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid #444",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ color: "#0ff", marginBottom: "15px" }}>Services</h2>

        {cart.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: "1px solid #333",
            }}
          >
            <span>{item.title}</span>
            <span>${item.price}</span>
          </div>
        ))}

        <h3 style={{ marginTop: "20px", fontSize: "1.3rem" }}>
          Total: <span style={{ color: "#0ff" }}>${total}</span>
        </h3>
      </div>

      {/* ✅ Email Input */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="email"
          placeholder="Enter email to send invoice"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #444",
            background: "#222",
            color: "white",
            marginBottom: "10px",
          }}
        />

        <button
          onClick={sendInvoiceEmail}
          disabled={sending}
          style={{
            width: "100%",
            padding: "15px",
            background: sending ? "#555" : "#0ff",
            color: "#000",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1.1rem",
            marginBottom: "20px",
          }}
        >
          {sending ? "Sending..." : "Email Invoice"}
        </button>
      </div>

      {/* Print Button */}
      <button
        onClick={() => window.print()}
        style={{
          width: "100%",
          padding: "15px",
          background: "#0ff",
          color: "#000",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1.1rem",
        }}
      >
        Print / Save as PDF
      </button>
    </div>
  );
}