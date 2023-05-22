import "./App.css";
import React from "react";
import { NavBar, Logo, Hamburger, Overview, SlideWindow } from "./components/index.js";
import "./Hamburger.css";

function App() {
  return (
    <div className="App">
      <Logo />
      <NavBar />
      <Hamburger />
      <Overview />
      <SlideWindow />
    </div>
  );
}

export default App;
