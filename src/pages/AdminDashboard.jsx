import { useState, useEffect } from "react";
import { getThemeSettings } from "../theme";

export default function AdminDashboard() {
    const theme = getThemeSettings();

    const [adminName, setAdminName] = useState("Admin");

    // Load admin name from hardcoded accounts (optional)
    useEffect(() => {
        const admin = localStorage.getItem("adminName");
        if (admin) setAdminName(admin);
    }, []);

    // Styles
    const page = {
        width: "100%",
        minHeight: "100vh",
        background: theme.backgroundColor,
        padding: "40px",
        color: theme.accentColor,
        fontFamily: theme.fontFamily
    };

    const section = {
        background: `${theme.backgroundColor}dd`,
        border: `1px solid ${theme.primaryColor}`,
        borderRadius: "16px",
        padding: "25px",
        marginBottom: "30px",
        boxShadow: `0 0 20px ${theme.primaryColor}55`
    };

    const header = {
        fontSize: "32px",
        fontWeight: "700",
        color: theme.primaryColor,
        marginBottom: "10px",
        textShadow: `0 0 12px ${theme.primaryColor}`
    };

    const subHeader = {
        fontSize: "18px",
        opacity: 0.8,
        marginBottom: "25px"
    };

    const cardRow = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginBottom: "30px"
    };

    const card = {
        background: `${theme.backgroundColor}cc`,
        border: `1px solid ${theme.primaryColor}`,
        borderRadius: "14px",
        padding: "20px",
        boxShadow: `0 0 15px ${theme.primaryColor}55`
    };

    const cardTitle = {
        fontSize: "18px",
        fontWeight: "700",
        marginBottom: "8px",
        color: theme.primaryColor
    };

    const table = {
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "15px"
    };

    const th = {
        textAlign: "left",
        padding: "12px",
        borderBottom: `1px solid ${theme.primaryColor}`,
        color: theme.primaryColor
    };

    const td = {
        padding: "12px",
        borderBottom: `1px solid ${theme.primaryColor}55`
    };

    const button = {
        padding: "10px 16px",
        borderRadius: "10px",
        background: theme.accentColor,
        color: theme.backgroundColor,
        fontWeight: "700",
        border: "none",
        cursor: "pointer",
        boxShadow: `0 0 12px ${theme.accentColor}`,
        marginRight: "10px",
        marginTop: "10px"
    };

    return (
        <div style={page}>
            {/* Welcome Header */}
            <div style={section}>
                <div style={header}>Welcome back, {adminName} (Admin)</div>
                <div style={subHeader}>Here’s an overview of your studio operations.</div>
            </div>

            {/* Analytics Cards */}
            <div style={cardRow}>
                <div style={card}>
                    <div style={cardTitle}>Active Projects</div>
                    <div>7</div>
                </div>

                <div style={card}>
                    <div style={cardTitle}>Pending Approvals</div>
                    <div>3</div>
                </div>

                <div style={card}>
                    <div style={cardTitle}>Upcoming Deadlines</div>
                    <div>5</div>
                </div>

                <div style={card}>
                    <div style={cardTitle}>Total Clients</div>
                    <div>12</div>
                </div>
            </div>

            {/* Project Management */}
            <div style={section}>
                <div style={cardTitle}>Project Management</div>
                <table style={table}>
                    <thead>
                        <tr>
                            <th style={th}>Client</th>
                            <th style={th}>Project</th>
                            <th style={th}>Stage</th>
                            <th style={th}>Next Milestone</th>
                            <th style={th}>Due Date</th>
                            <th style={th}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={td}>Emma</td>
                            <td style={td}>Portfolio Website</td>
                            <td style={td}>Design</td>
                            <td style={td}>Homepage Mockup</td>
                            <td style={td}>April 12</td>
                            <td style={td}>
                                <button style={button}>Open</button>
                            </td>
                        </tr>

                        <tr>
                            <td style={td}>John</td>
                            <td style={td}>Brand Kit</td>
                            <td style={td}>Discovery</td>
                            <td style={td}>Color Palette</td>
                            <td style={td}>April 8</td>
                            <td style={td}>
                                <button style={button}>Open</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Client Management */}
            <div style={section}>
                <div style={cardTitle}>Client Management</div>
                <table style={table}>
                    <thead>
                        <tr>
                            <th style={th}>Client</th>
                            <th style={th}>Email</th>
                            <th style={th}>Project</th>
                            <th style={th}>Status</th>
                            <th style={th}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={td}>Emma</td>
                            <td style={td}>emma@example.com</td>
                            <td style={td}>Portfolio Website</td>
                            <td style={td}>Active</td>
                            <td style={td}>
                                <button style={button}>View</button>
                            </td>
                        </tr>

                        <tr>
                            <td style={td}>John</td>
                            <td style={td}>john@example.com</td>
                            <td style={td}>Brand Kit</td>
                            <td style={td}>Active</td>
                            <td style={td}>
                                <button style={button}>View</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Deliverables Upload Center */}
            <div style={section}>
                <div style={cardTitle}>Deliverables Upload Center</div>
                <button style={button}>Upload File</button>
                <button style={button}>Assign to Client</button>
            </div>

            {/* Messages */}
            <div style={section}>
                <div style={cardTitle}>Messages & Notifications</div>
                <div><strong>Emma:</strong> Can we try a darker header?</div>
                <div><strong>System:</strong> New client account created.</div>
                <button style={button}>Send Message</button>
            </div>

            {/* Billing */}
            <div style={section}>
                <div style={cardTitle}>Billing Overview</div>
                <div>Total Revenue: $4,200</div>
                <div>Outstanding Invoices: $600</div>
                <button style={button}>Open Billing Center</button>
            </div>

            {/* Quick Actions */}
            <div style={section}>
                <div style={cardTitle}>Quick Actions</div>
                <button style={button}>Add New Client</button>
                <button style={button}>Create New Project</button>
                <button style={button}>Upload Deliverable</button>
                <button style={button}>Send Announcement</button>
                <button style={button}>Open Settings</button>
            </div>
        </div>
    );
}
