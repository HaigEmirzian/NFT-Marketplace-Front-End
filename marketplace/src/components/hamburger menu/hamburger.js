import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./hamburger.css"

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="menu-container">
      {/* Hamburger icon */}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu content */}
      {isOpen && (
        <div className="menu">
            <ul>
              <li><Link to="/modules" onClick={handleLinkClick}>Modules</Link></li>
              <li><Link to="/mission" onClick={handleLinkClick}>Mission</Link></li>
              <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            </ul>
        </div>
      )}
    </div>
  );
}

export default Hamburger;
