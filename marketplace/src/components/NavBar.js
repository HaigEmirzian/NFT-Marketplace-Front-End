import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/houses">Houses</Link>
      <Link to="/exchange">Exchange</Link>
      <Link to="/guide">Guide</Link>
    </div>
  );
}

export default NavBar;