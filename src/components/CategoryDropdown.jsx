import { useState } from "react";
import "./categoryDropdown.css";

export default function CategoryDropdown({ categories, onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="category-dropdown">
      <button 
        className="dropdown-toggle" 
        onClick={() => setOpen(!open)}
      >
        Categories
      </button>

      {open && (
        <ul className="dropdown-menu">
          {categories.map((cat, index) => (
            <li 
              key={index} 
              onClick={() => {
                onSelect(cat);
                setOpen(false);
              }}
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
