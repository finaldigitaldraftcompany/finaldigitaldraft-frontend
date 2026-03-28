export default function Cancel() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        animation: "fadeIn 1s ease",
      }}
    >
      {/* ✅ Glowing Red X */}
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "4px solid #f55",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30px",
          boxShadow: "0 0 20px #f55",
          fontSize: "4rem",
          color: "#f55",
        }}
      >
        ✕
      </div>

      <h1 style={{ fontSize: "3rem", color: "#f55", marginBottom: "20px" }}>
        Payment Canceled
      </h1>

      <p style={{ fontSize: "1.2rem", opacity: 0.9, maxWidth: "600px" }}>
        Your payment was canceled. No charges were made.  
        You can return to checkout anytime to complete your purchase.
      </p>

      <button
        onClick={() => (window.location.href = "/checkout")}
        style={{
          marginTop: "40px",
          padding: "15px 30px",
          background: "#0ff",
          color: "#000",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1.1rem",
          transition: "0.3s",
        }}
      >
        Return to Checkout
      </button>

      {/* ✅ Inline keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}