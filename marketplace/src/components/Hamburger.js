import React, { useState } from "react";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
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
            <li>Modules</li>
            <li>Mission</li>
            <li>About</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Hamburger;