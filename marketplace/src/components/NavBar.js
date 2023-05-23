import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import Houses from "./houses";
import Exchange from "./exchange";
import Guide from "./guide";

function NavBar() {
    return (
        <div>
            <Router>
                <div>
                    <Link to="/houses">Houses</Link>
                    <Link to="/exchange">Exchange</Link>
                    <Link to="/guide">Guide</Link>
                </div>

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/houses" element={<Houses />} />
                    <Route path="/exchange" element={<Exchange />} />
                    <Route path="/guide" element={<Guide />} />
                </Routes>
            </Router>
        </div>
    );
}

export default NavBar;
