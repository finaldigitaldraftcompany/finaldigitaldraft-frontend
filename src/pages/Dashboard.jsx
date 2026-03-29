import { useEffect, useState } from "react";
import { getThemeSettings } from "../theme";

export default function Dashboard() {
    const theme = getThemeSettings();

    const [clientName, setClientName] = useState("Client");

    // Load client name from localStorage
    useEffect(() => {
        const clients = JSON.parse(localStorage.getItem("clients") || "[]");
        const lastClient = clients[clients.length - 1];
        if (lastClient?.fullName) setClientName(lastClient.fullName);
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

    const progressContainer = {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px"
    };

    const progressStep = (active) => ({
        width: "15%",
        height: "10px",
        borderRadius: "10px",
        background: active ? theme.primaryColor : `${theme.primaryColor}33`,
        boxShadow: active ? `0 0 10px ${theme.primaryColor}` : "none",
        transition: "0.3s ease"
    });

    const button = {
        padding: "12px 18px",
        borderRadius: "10px",
        background: theme.accentColor,
        color: theme.backgroundColor,
        fontWeight: "700",
        border: "none",
        cursor: "pointer",
        boxShadow: `0 0 12px ${theme.accentColor}`,
        marginRight: "10px"
    };

    return (
        <div style={page}>
            {/* Welcome Header */}
            <div style={section}>
                <div style={header}>Welcome back, {clientName}!</div>
                <div style={subHeader}>Here’s what’s happening with your project.</div>
            </div>

            {/* Project Status Cards */}
            <div style={cardRow}>
                <div style={card}>
                    <div style={cardTitle}>Project Stage</div>
                    <div>Design Phase</div>
                </div>

                <div style={card}>
                    <div style={cardTitle}>Next Milestone</div>
                    <div>Homepage Mockup Delivery</div>
                </div>

                <div style={card}>
                    <div style={cardTitle}>Estimated Completion</div>
                    <div>April 12, 2026</div>
                </div>

                <div style={card}>
                    <div style={cardTitle}>Assigned Designer</div>
                    <div>Emma</div>
                </div>
            </div>

            {/* Progress Tracker */}
            <div style={section}>
                <div style={cardTitle}>Project Timeline</div>
                <div style={progressContainer}>
                    <div style={progressStep(true)}></div>
                    <div style={progressStep(true)}></div>
                    <div style={progressStep(true)}></div>
                    <div style={progressStep(false)}></div>
                    <div style={progressStep(false)}></div>
                    <div style={progressStep(false)}></div>
                </div>
                <div style={{ marginTop: "10px", opacity: 0.7 }}>
                    Discovery → Wireframes → Design → Development → Review → Launch
                </div>
            </div>

            {/* Deliverables */}
            <div style={section}>
                <div style={cardTitle}>Deliverables</div>
                <div style={{ marginBottom: "10px" }}>• Homepage Mockup (PNG)</div>
                <div style={{ marginBottom: "10px" }}>• Brand Color Palette (PDF)</div>
                <button style={button}>Download All</button>
                <button style={button}>Approve</button>
                <button style={button}>Request Changes</button>
            </div>

            {/* Messages */}
            <div style={section}>
                <div style={cardTitle}>Messages</div>
                <div style={{ marginBottom: "10px" }}>
                    <strong>Emma:</strong> Your homepage mockup is ready for review!
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <strong>You:</strong> Looks great! Can we try a darker header?
                </div>
                <button style={button}>Send New Message</button>
            </div>

            {/* Billing */}
            <div style={section}>
                <div style={cardTitle}>Billing Overview</div>
                <div>Current Balance: $250</div>
                <div>Next Invoice: April 5, 2026</div>
                <button style={button}>View Billing</button>
            </div>

            {/* Appointment Scheduler */}
            <div style={section}>
                <div style={cardTitle}>Schedule a Meeting</div>
                <button style={button}>Pick a Date</button>
            </div>

            {/* Quick Actions */}
            <div style={section}>
                <div style={cardTitle}>Quick Actions</div>
                <button style={button}>Upload Files</button>
                <button style={button}>Request Revision</button>
                <button style={button}>Contact Support</button>
            </div>
        </div>
    );
}
