import React from "react";
import "./Realisation.css";

const Realisation = () => {
  const projects = [
    {
      title: "CV Numérique",
      description:
        "Conception d’un CV interactif prêt à être envoyé, permettant de présenter mes compétences, mon expérience professionnelle et personnelle de façon claire et visuelle.",
      image: "/img/CVimage.png",
      link: "/Projets/CV/cvhtml.html",
      tech: "Html/Css",
    },
    {
      title: "Portfolio Numérique",
      description:
        "À l’image du CV, ce portfolio présente mes compétences, mon parcours professionnel ainsi que mes projets réels. Il est conçu pour les employeurs et les clients.",
      image: "/img/imgPortfolio.png",
      link: "https://github.com/LLION84/Portfolio-c.e.f/tree/main/.vscode",
      tech: "Vue.js",
    },
    {
      title: "Maquettage d’un site e-commerce",
      description:
        "Création d’une maquette d’un site e-commerce pour une marque audio (casques, enceintes, etc.) à l’aide de l’outil Figma.",
      image: "/img/Figmaimg.png",
      link: "https://github.com/LLION84/Figma-ProBeats-devoir-cef",
      tech: "Figma",
    },
  ];
  return (
    <div className="MainDivRealisation">
      <img
        src="/img/topimgfond.jpg"
        className="img-fluid w-100"
        style={{ height: "180px", objectFit: "cover" }}
        alt="Bannière"
      />

      <section className="text-center my-5">
        <h1 className="mt-4">PORTFOLIO</h1>
        <p className="mb-3">Voici quelques-unes de mes réalisations.</p>
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

      <div className="container mb-5">
        <div className="row gx-4 gy-4">
          {projects.map((project, index) => (
            <div
              className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center"
              key={index}
            >
              <div className="card h-100  shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center d-flex flex-column">
                  <h2 className="card-title">{project.title}</h2>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    className="btn btn-outline-primary mt-auto w-auto d-block mx-auto"
                    style={{ width: "120px" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir
                  </a>
                </div>
                <div
                  style={{
                    backgroundColor: "#f0f0f0",
                    padding: "8px 12px",
                    fontSize: "0.9rem",
                    color: "#555",
                    textAlign: "center",
                    borderTop: "1px solid #ddd",
                    fontStyle: "italic",
                  }}
                >
                  {project.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Realisation;
