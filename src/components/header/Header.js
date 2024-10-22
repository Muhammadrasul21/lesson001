import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <nav className="navbar">
            <div className="navbar__logo">Escape</div>
            <ul className="navbar__items">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">CATEGORIES</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </nav>
          <div className="hero">
            <div className="hero__wrapper">
              <h2>Let's do it together.</h2>
              <p>
                We travel the world in search of stories. Come along for the
                ride.
              </p>
              <button>View Latest Posts</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
