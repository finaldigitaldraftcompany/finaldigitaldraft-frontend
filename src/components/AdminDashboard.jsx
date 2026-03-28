import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

export default function AdminDashboard() {
    const navigate = useNavigate();
    // 🆕 State to track if the sidebar is collapsed (initially false/open)
    const [isCollapsed, setIsCollapsed] = useState(false); 

    const handleLogout = () => {
        localStorage.removeItem("isAdmin");
        navigate("/login");
    };
    
    // 🆕 Toggle function
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    // 🆕 Conditional class name based on state
    const sidebarClass = isCollapsed ? "admin-sidebar collapsed" : "admin-sidebar";

    return (
        <div className="admin-container">
            {/* 1. Sidebar uses the dynamic class */}
            <aside className={sidebarClass}>
                <div className="sidebar-header">
                    <h2>Admin Panel</h2>
                </div>

                <nav>
                    <ul>
                        <li><a href="/admin">Dashboard Home</a></li>
                        <li><a href="/admin/edit-home">Edit Homepage</a></li>
                        <li><a href="/admin/edit-services">Edit Services</a></li>
                        <li><a href="/admin/edit-theme">Theme Settings</a></li>
                    </ul>
                </nav>

                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            </aside>

            <main className="admin-main">
                {/* 2. Collapse Toggle Button (Top-left) */}
                <button 
                    className="collapse-toggle-btn" 
                    onClick={toggleSidebar}
                    style={{ 
                        color: '#00eaff', 
                        fontSize: '1.5em',
                        fontWeight: 'bold',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        // Position based on collapsed state
                        left: isCollapsed ? '20px' : '260px', 
                        top: '20px', 
                        zIndex: 1000, // High Z-Index for this button
                        transition: 'left 0.3s ease-in-out',
                        boxShadow: '0 0 10px #00eaff',
                        padding: '5px',
                        borderRadius: '4px',
                        position: 'fixed',
                    }}
                >
                    {/* Dynamically change the arrow based on state */}
                    {isCollapsed ? '→' : '←'} 
                </button>

                {/* 🎯 FIX: Go to Public Homepage Button (Max Z-Index) */}
                <button
                    onClick={() => navigate("/")}
                    className="back-home-btn"
                    style={{
                        padding: "10px 20px",
                        background: "#00eaff",
                        color: "#000",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "700",
                        boxShadow: "0 0 10px #00eaff",
                        
                        position: 'fixed', 
                        top: '140px', 
                        right: '20px', 
                        // 💥 CRITICAL FIX: Set Z-Index extremely high (e.g., 9999) 
                        // to ensure it stacks above all site headers/shadows.
                        zIndex: 9999, 
                    }}
                >
                    ← Go to Website Homepage
                </button>

                {/* Main Content Start (Pushed down to clear the fixed buttons) */}
                <div style={{ marginTop: '50px' }}>
                    <h1>Welcome, Admin</h1>
                    <p>Select an option from the left to begin editing your site.</p>
                </div>
            </main>
        </div>
    );
}