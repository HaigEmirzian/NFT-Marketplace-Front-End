import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/houses">Houses</Link></li>
                    <li><Link to="/exchange">Exchange</Link></li>
                    <li><Link to="/guide">Guide</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;