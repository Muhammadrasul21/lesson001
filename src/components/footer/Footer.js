import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="feature__title">
            <p>Featured Posts</p>
            <hr />
          </div>
          <div className="footer__input">
            <input type="text" placeholder="Enter your email address" />
            <button>Submit</button>
          </div>
        </div>
          <nav className="navbar footer__info">
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
      </div>
    </div>
  );
}

export default Footer;
