import React from "react";
import ScrollToTopButton from "../Buttontop/ScrollToTopButton";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaChevronRight,
} from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div
        style={{
          backgroundColor: "#e0e0e0",
          width: "100%",
        }}
      >
        <div className="container py-5">
          <div className="row text-start">
            <div
              className="col-12 col-md-6 col-lg-3 mb-4"
              style={{ color: "#444" }}
            >
              <h5>John Doe</h5>
              <p>
                123 Rue du Code
                <br />
                84000 Avignon
                <br />
                07.89.89.66.30
              </p>
              <div className="d-flex gap-3">
                <a
                  href="https://github.com/LLION84"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  style={{ color: "#333" }}
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://x.com/home"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  style={{ color: "#333" }}
                >
                  <FaTwitter size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/notifications/?filter=all"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  style={{ color: "#333" }}
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <h5>Liens utiles</h5>
              <ul className="list-unstyled">
                <li>
                  <FaChevronRight
                    style={{ color: "#0d6efd" }}
                    className="me-2"
                  />
                  <Link
                    to="/"
                    style={{ color: "#444", textDecoration: "none" }}
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <FaChevronRight
                    style={{ color: "#0d6efd" }}
                    className="me-2"
                  />
                  <Link
                    to="/github"
                    style={{ color: "#444", textDecoration: "none" }}
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <FaChevronRight
                    style={{ color: "#0d6efd" }}
                    className="me-2"
                  />
                  <Link
                    to="/service"
                    style={{ color: "#444", textDecoration: "none" }}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <FaChevronRight
                    style={{ color: "#0d6efd" }}
                    className="me-2"
                  />
                  <Link
                    to="/contact"
                    style={{ color: "#444", textDecoration: "none" }}
                  >
                    Me contacter
                  </Link>
                </li>
                <li>
                  <FaChevronRight
                    style={{ color: "#0d6efd" }}
                    className="me-2"
                  />
                  <Link
                    to="/mentionlegales"
                    style={{ color: "#444", textDecoration: "none" }}
                  >
                    Mentions légales
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <h5>Mes dernières réalisations</h5>
              <ul className="list-unstyled">
                <li>
                  <FaChevronRight
                    style={{ color: "#0d6efd" }}
                    className="me-2"
                  />
                  <a
                    href="/Projets/CV/cvhtml.html"
                    style={{ color: "#444", textDecoration: "none" }}
                  >
                    CV Numérique
                  </a>
                </li>
                <li>
                  <FaChevronRight
                    style={{ color: "#0d6efd" }}
                    className="me-2"
                  />
                  <a
                    href="https://github.com/LLION84/Portfolio-c.e.f/tree/main/.vscode"
                    style={{ color: "#444", textDecoration: "none" }}
                  >
                    Portfolio Numérique
                  </a>
                </li>
                <li>
                  <FaChevronRight
                    style={{ color: "#0d6efd" }}
                    className="me-2"
                  />
                  <a
                    href="https://github.com/LLION84/Figma-ProBeats-devoir-cef"
                    style={{ color: "#444", textDecoration: "none" }}
                  >
                    Maquettage d’un site e-commerce
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <h5>Mes derniers articles</h5>
              <ul className="list-unstyled">
                <li>
                  <FaChevronRight
                    style={{ color: "#0d6efd" }}
                    className="me-2"
                  />
                  <a
                    href="#blog1"
                    style={{ color: "#444", textDecoration: "none" }}
                  >
                    Comprendre React
                  </a>
                </li>
                <li>
                  <FaChevronRight
                    style={{ color: "#0d6efd" }}
                    className="me-2"
                  />
                  <a
                    href="#blog2"
                    style={{ color: "#444", textDecoration: "none" }}
                  >
                    Déploiement sur Vercel
                  </a>
                </li>
                <li>
                  <FaChevronRight
                    style={{ color: "#0d6efd" }}
                    className="me-2"
                  />
                  <a
                    href="#blog3"
                    style={{ color: "#444", textDecoration: "none" }}
                  >
                    Node.js pour débutants
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark text-light text-center py-3 position-relative mb-4">
        <small>&copy; 2025 John Doe. Tous droits réservés.</small>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
