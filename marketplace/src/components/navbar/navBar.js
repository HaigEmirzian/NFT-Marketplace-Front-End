import "./navBar.css"

function NavBar() {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <p><a href="/houses">Houses</a></p>
                <p><a href="/exchange">Exchange</a></p>
                <p><a href="/guide">Guide</a></p>
            </div>
        </div>
        
    );
}

export default NavBar;