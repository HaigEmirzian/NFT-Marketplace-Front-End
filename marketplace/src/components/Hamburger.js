import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Modules from "./modules.js";
import Mission from "./mission.js";
import About from "./about.js";

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
          <Router>
            <ul>
              <li>
                <Link to="/modules" onClick={handleLinkClick}>
                  Modules
                </Link>
              </li>
              <li>
                <Link to="/mission" onClick={handleLinkClick}>
                  Mission
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleLinkClick}>
                  About
                </Link>
              </li>
            </ul>

            <Routes>
              <Route path="/modules" element={<Modules />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default Hamburger;
