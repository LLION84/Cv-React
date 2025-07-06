import React from "react";
import "./Service.css";
import { FaDesktop, FaFileCode, FaSearchDollar } from "react-icons/fa";
const Service = () => {
  return (
    <div className="MainDivService">
      <img
        src="/img/topimgfond.jpg"
        className="img-fluid w-100"
        style={{ height: "180px", objectFit: "cover" }}
        alt="Bannière"
      />
      <section className="text-center my-5">
        <h1 className="mt-4">MES OFFRES DE SERVICES</h1>

        <p className="mb-3">
          Voici les prestations sur lesquelles je peux intervenir.
        </p>

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
      <section className="container my-5">
        <div
          className="d-flex flex-column flex-md-row justify-content-center align-items-center text-center gap-4"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* Bloc 1 */}
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              padding: "2rem 1.5rem 3rem 1.5rem",
              borderRadius: "15px",
              minWidth: "280px",
              minHeight: "360px",
              flex: "1 1 300px",

              border: "1px solid #dee2e6",
            }}
          >
            <FaDesktop size={40} color="#0d6efd" />
            <h2 className="mt-3" style={{ fontSize: "1.4rem" }}>
              UX DESIGN
            </h2>
            <p>
              Je conçois des interfaces intuitives et agréables, pensées pour
              faciliter la navigation de vos utilisateurs. Mon but est de rendre
              chaque interaction simple, pour que vos clients aient une
              expérience fluide.
            </p>
          </div>

          {/* Bloc 2 */}
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              padding: "2rem 1.5rem 3rem 1.5rem",
              borderRadius: "15px",
              minWidth: "280px",
              minHeight: "360px",
              flex: "1 1 300px",

              border: "1px solid #dee2e6",
            }}
          >
            <FaFileCode size={40} color="#0d6efd" />
            <h2 className="mt-3" style={{ fontSize: "1.4rem" }}>
              Développement Web
            </h2>
            <p>
              Je crée des sites modernes et performants, avec HTML, CSS,
              JavaScript, Vue et React. J’utilise aussi Bootstrap pour un design
              responsive, adapté à tous les écrans et tous navigateurs.
            </p>
          </div>

          {/* Bloc 3 */}
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              padding: "2rem 1.5rem 3rem 1.5rem",
              borderRadius: "15px",
              minWidth: "280px",
              minHeight: "360px",
              flex: "1 1 300px",

              border: "1px solid #dee2e6",
            }}
          >
            <FaSearchDollar size={40} color="#0d6efd" />
            <h2 className="mt-3" style={{ fontSize: "1.4rem" }}>
              SEO & Marketing
            </h2>
            <p>
              J’optimise votre site pour mieux vous référencer, afin d’attirer
              plus de visiteurs qualifiés. Je vous accompagne pour améliorer vos
              ventes, avec des stratégies marketing efficaces.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
