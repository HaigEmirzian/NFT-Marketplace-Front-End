import React, { useState } from "react";
import { Link } from "react-router-dom";


function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
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
