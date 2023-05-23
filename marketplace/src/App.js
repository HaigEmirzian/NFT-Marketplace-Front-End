import "./App.css";
import React from "react";
import {
    Logo,
    NavBar,
    Hamburger,
    Houses,
    Exchange,
    Guide,
    Modules,
    Mission,
    About,
} from "./components/index.js";
import "./Hamburger.css";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Logo />
            <NavBar />
            <Hamburger />
            <Routes>
                <Route path="/houses" element={<Houses />} />
                <Route path="/exchange" element={<Exchange />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/modules" element={<Modules />} />
                <Route path="/mission" element={<Mission />} />
                <Route path="/about" element={<About />} />
            </Routes>  
        </div>
    );
}

export default App;
