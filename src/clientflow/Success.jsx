export default function Success() {
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
      {/* ✅ Glowing Checkmark */}
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "4px solid #0ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30px",
          boxShadow: "0 0 20px #0ff",
          fontSize: "4rem",
          color: "#0ff",
        }}
      >
        ✓
      </div>

      <h1 style={{ fontSize: "3rem", color: "#0ff", marginBottom: "20px" }}>
        Payment Successful!
      </h1>

      <p style={{ fontSize: "1.2rem", opacity: 0.9, maxWidth: "600px" }}>
        Thank you for your purchase. Your project is officially underway.  
        You’ll receive an email shortly with next steps.
      </p>

      <button
        onClick={() => (window.location.href = "/")}
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
        Return Home
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