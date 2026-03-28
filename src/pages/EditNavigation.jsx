import { useState, useEffect } from "react";
import { getThemeSettings } from "../theme";

export default function EditNavigation() {
    const theme = getThemeSettings();

    const defaultNav = [
        { label: "Home", path: "/", visible: true },
        { label: "Services", path: "/services", visible: true },
        { label: "About", path: "/about", visible: true },
        { label: "Portfolio", path: "/portfolio", visible: true },
        { label: "Pricing", path: "/pricing", visible: true },
        { label: "Contact", path: "/contact", visible: true }
    ];

    const [navItems, setNavItems] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("navItems");
        if (saved) {
            setNavItems(JSON.parse(saved));
        } else {
            setNavItems(defaultNav);
            localStorage.setItem("navItems", JSON.stringify(defaultNav));
        }
    }, []);

    const saveNav = () => {
        localStorage.setItem("navItems", JSON.stringify(navItems));
        alert("Navigation saved!");
    };

    const updateItem = (index, key, value) => {
        const updated = [...navItems];
        updated[index][key] = value;
        setNavItems(updated);
    };

    const addItem = () => {
        setNavItems([
            ...navItems,
            { label: "New Item", path: "/new", visible: true }
        ]);
    };

    const deleteItem = (index) => {
        const updated = navItems.filter((_, i) => i !== index);
        setNavItems(updated);
    };

    const moveItem = (index, direction) => {
        const updated = [...navItems];
        const newIndex = index + direction;

        if (newIndex < 0 || newIndex >= updated.length) return;

        const temp = updated[index];
        updated[index] = updated[newIndex];
        updated[newIndex] = temp;

        setNavItems(updated);
    };

    return (
        <div style={{ padding: "120px 40px", color: "#fff" }}>
            <h1 style={{ color: theme.primaryColor, textShadow: `0 0 10px ${theme.primaryColor}` }}>
                Edit Navigation
            </h1>

            {navItems.map((item, index) => (
                <div
                    key={index}
                    style={{
                        background: "#111",
                        padding: "15px",
                        marginBottom: "15px",
                        borderRadius: "8px",
                        border: `1px solid ${theme.primaryColor}`,
                        boxShadow: `0 0 10px ${theme.primaryColor}`
                    }}
                >
                    <input
                        value={item.label}
                        onChange={(e) => updateItem(index, "label", e.target.value)}
                        style={{
                            padding: "8px",
                            marginRight: "10px",
                            borderRadius: "6px",
                            border: "none"
                        }}
                    />

                    <input
                        value={item.path}
                        onChange={(e) => updateItem(index, "path", e.target.value)}
                        style={{
                            padding: "8px",
                            marginRight: "10px",
                            borderRadius: "6px",
                            border: "none"
                        }}
                    />

                    <label style={{ marginRight: "10px" }}>
                        <input
                            type="checkbox"
                            checked={item.visible}
                            onChange={(e) => updateItem(index, "visible", e.target.checked)}
                        />{" "}
                        Visible
                    </label>

                    <button onClick={() => moveItem(index, -1)}>↑</button>
                    <button onClick={() => moveItem(index, 1)}>↓</button>
                    <button onClick={() => deleteItem(index)} style={{ marginLeft: "10px", color: "red" }}>
                        Delete
                    </button>
                </div>
            ))}

            <button
                onClick={addItem}
                style={{
                    padding: "10px 20px",
                    background: theme.primaryColor,
                    color: "#000",
                    borderRadius: "6px",
                    marginRight: "10px"
                }}
            >
                Add Item
            </button>

            <button
                onClick={saveNav}
                style={{
                    padding: "10px 20px",
                    background: theme.accentColor,
                    color: "#000",
                    borderRadius: "6px"
                }}
            >
                Save Navigation
            </button>
        </div>
    );
}