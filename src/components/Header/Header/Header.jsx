import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom px-4 py-3">
        <Link className="navbar-brand text-uppercase" to="/">
          Blaise محمد
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link text-uppercase" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/service">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/realisation">
                Réalisation
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/contact">
                Me contacter
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
