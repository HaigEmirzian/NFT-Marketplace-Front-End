import "./App.css";
import React from "react";
import {
    Logo,
    Hamburger,
    Overview,
    SlideWindow,
    Houses,
    Exchange,
    Guide,
} from "./components/index.js";
import "./Hamburger.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Logo />
            <Router>
                <div>
                    <Link to="/houses">Houses</Link>
                    <Link to="/exchange">Exchange</Link>
                    <Link to="/guide">Guide</Link>
                </div>

                <Routes>
                    <Route path="/houses" element={<Houses />} />
                    <Route path="/exchange" element={<Exchange />} />
                    <Route path="/guide" element={<Guide />} />
                </Routes>
            </Router>

            <Hamburger />
            <Overview />
            <SlideWindow />
        </div>
    );
}

export default App;
