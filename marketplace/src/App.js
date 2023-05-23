import "./App.css";
import React from "react";
import {
    Logo,
    NavBar,
    Hamburger,
} from "./components/index.js";
import "./Hamburger.css";

function App() {
    return (
        <div className="App">
            <Logo />
            <NavBar />
            <Hamburger />
        </div>
    );
}

export default App;
