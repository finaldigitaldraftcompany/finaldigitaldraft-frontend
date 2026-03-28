import "./adminButton.css";

export default function AdminButton() {
  return (
    <button 
      className="admin-floating-btn"
      onClick={() => window.location.href = "/admin"}
    >
      Admin
    </button>
  );
}
