import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="hero-section d-flex align-items-center text-white">
        <div className="overlay"></div>
        <div className="container text-center z-1 position-relative">
          <h1 style={{ color: "#EEE", fontWeight: "600", fontSize: "4rem" }}>
            Bienvenue , je suis Blaise
          </h1>
          <h2 style={{ color: "#EEE", fontWeight: "600", fontSize: "2.5rem" }}>
            Développeur Web Full Stack
          </h2>
          <a href="#about" className="btn btn-primary mt-3">
            En savoir plus
          </a>
        </div>
      </section>
      <section
        id="about"
        className="about-section container my-5 p-4 rounded shadow-sm bg-light"
      >
        <div className="row align-items-start">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="position-relative d-inline-block mb-3 about-title">
              À propos
              <span className="blue-line"></span>
            </h2>
            <p>
              Ayant acquis des{" "}
              <strong>fondements solides en informatique</strong>, j’ai choisi
              de me former au métier d’
              <strong>intégrateur-développeur web full stack</strong> au sein du{" "}
              <strong>Centre Européen de Formation</strong>. Cette formation m’a
              permis de maîtriser les aspects essentiels du développement web,
              aussi bien côté <strong>interface utilisateur (front-end)</strong>{" "}
              que <strong>fonctionnalité serveur (back-end)</strong>.
            </p>
            <p>
              Actuellement basé à <strong>Avignon</strong>, je suis à la
              recherche d’un <strong>stage</strong> pour mettre mes compétences
              en pratique, enrichir mon expérience et{" "}
              <strong>
                participer activement à la transformation numérique
              </strong>{" "}
              d’une entreprise.
            </p>
            <p>
              Je m’attache à créer des{" "}
              <strong>interfaces modernes, accessibles et bien pensées</strong>,
              qui allient <strong>esthétique</strong> et{" "}
              <strong>efficacité</strong>. Mon objectif : concevoir des{" "}
              <strong>solutions web</strong> qui parlent à un{" "}
              <strong>large public</strong>, tout en répondant aux{" "}
              <strong>besoins concrets</strong> de mes interlocuteurs.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="/img/imglion.jpg"
              alt="John Doe"
              className="img-fluid mb-4"
              style={{ width: "550px", borderRadius: "8px" }} // coins légèrement arrondis
            />

            <div>
              <h4>Compétences</h4>

              <div className="mb-3 text-start">
                <span id="htmlLabel" className="form-label">
                  HTML
                </span>
                <div className="progress">
                  <div
                    id="htmlProgress"
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%", backgroundColor: "#e34c26" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    90%
                  </div>
                </div>
              </div>

              <div className="mb-3 text-start">
                <span id="cssLabel" className="form-label">
                  CSS
                </span>
                <div className="progress">
                  <div
                    id="cssProgress"
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%", backgroundColor: "#264de4" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    90%
                  </div>
                </div>
              </div>

              <div className="mb-3 text-start">
                <span id="jsLabel" className="form-label">
                  JavaScript
                </span>
                <div className="progress">
                  <div
                    id="jsProgress"
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "60%",
                      backgroundColor: "#f0db4f",
                      color: "#000",
                    }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    60%
                  </div>
                </div>
              </div>

              <div className="mb-3 text-start">
                <span id="vueProgressLabel" className="form-label">
                  Vue.js
                </span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-labelledby="vueProgressLabel"
                    style={{ width: "85%", backgroundColor: "#42b883" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    85%
                  </div>
                </div>
              </div>

              <div className="mb-3 text-start">
                <span id="reactProgressLabel" className="form-label">
                  React
                </span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-labelledby="reactProgressLabel"
                    style={{
                      width: "60%",
                      backgroundColor: "#61dafb",
                      color: "#000",
                    }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    60%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
