import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
        <Link
          className="navbar-brand d-flex align-items-center text-light"
          to="/"
        >
          <img
            src="/img/logo.png"
            alt="Logo Blaise"
            style={{ marginRight: "10px" }}
          />
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
              <Link className="nav-link text-uppercase text-light" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-uppercase text-light"
                to="/service"
              >
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-uppercase text-light"
                to="/realisation"
              >
                Réalisation
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase text-light" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-uppercase text-light"
                to="/contact"
              >
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
