import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions légales</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="container my-5">
        <section className="text-center my-5">
          <h1 className="mt-4">Mentions Légales</h1>

          <div
            style={{
              width: "250px",
              height: "4px",
              backgroundColor: "#0d6efd",
              margin: "20px auto",
              borderRadius: "2px",
            }}
          ></div>
        </section>

        <div className="accordion" id="accordionMentions">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEditeur">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEditeur"
                aria-expanded="true"
                aria-controls="collapseEditeur"
              >
                L’éditeur du site
              </button>
            </h2>
            <div
              id="collapseEditeur"
              className="accordion-collapse collapse show"
              aria-labelledby="headingEditeur"
              data-bs-parent="#accordionMentions"
            >
              <div className="accordion-body">
                <strong>Blaise Corp</strong>
                <br />
                <FaMapMarkerAlt style={{ marginRight: "5px" }} />
                <strong>Votre Adresse</strong>
                <br />
                <FaEnvelope style={{ marginRight: "5px" }} />
                <strong>votre.email@example.com</strong>
                <br />
                <FaPhone style={{ marginRight: "5px" }} />
                <strong>Votre Numéro</strong>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingHebergeur">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseHebergeur"
                aria-expanded="false"
                aria-controls="collapseHebergeur"
              >
                L’hébergeur du site
              </button>
            </h2>
            <div
              id="collapseHebergeur"
              className="accordion-collapse collapse"
              aria-labelledby="headingHebergeur"
              data-bs-parent="#accordionMentions"
            >
              <div className="accordion-body">
                Adresse : <strong>Adresse de l’hébergeur</strong>
                <br />
                Site web : Nom de l’hébergeur
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingCredits">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseCredits"
                aria-expanded="false"
                aria-controls="collapseCredits"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseCredits"
              className="accordion-collapse collapse"
              aria-labelledby="headingCredits"
              data-bs-parent="#accordionMentions"
            >
              <div className="accordion-body">
                Site développé par Blaise Zinou, étudiant du C.E.F.
                <br />
                Référence : React.createRef(). Les images utilisées sur ce site
                proviennent d’une banque d’images libres de droits.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentionsLegales;
