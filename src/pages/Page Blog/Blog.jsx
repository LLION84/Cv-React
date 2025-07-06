import React from "react";

const Blog = () => {
  const articleBlog = [
    {
      title: "Coder son site en HTML/CSS",
      description:
        "Dans cet article, vous apprendrez à créer un site web de A à Z en utilisant uniquement HTML et CSS, sans connaissances préalables en programmation.",
      image:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80",
      date: "22 août 2022",
      link: "",
    },
    {
      title: "Vendre ses produits sur le web",
      description:
        "Découvrez les stratégies de marketing digital pour vendre efficacement vos produits en ligne et comprendre le fonctionnement des algorithmes des plateformes.",
      image:
        "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=800&q=80",
      date: "23 août 2022",
      link: "",
    },
    {
      title: "Se positionner sur Google",
      description:
        "Apprenez les techniques de référencement naturel (SEO) pour améliorer la visibilité de votre site et apparaître dans les premiers résultats de recherche.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      date: "24 août 2022",
      link: "",
    },
    {
      title: "Coder en responsive design",
      description:
        "Maîtrisez l’art du design responsive pour que votre site s’adapte parfaitement aux smartphones, tablettes et ordinateurs.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      date: "25 août 2022",
      link: "",
    },
    {
      title: "Techniques de référencement",
      description:
        "Découvrez les meilleures pratiques pour optimiser le référencement de votre site et attirer un maximum de visiteurs.",
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80",
      date: "26 août 2022",
      link: "",
    },
    {
      title: "Apprendre à coder",
      description:
        "Un guide complet pour débuter dans le développement web et apprendre les bases du code, étape par étape.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      date: "27 août 2022",
      link: "",
    },
  ];
  return (
    <div className="MainDivBlog">
      <img
        src="/img/topimgfond.jpg"
        className="img-fluid w-100"
        style={{ height: "180px", objectFit: "cover" }}
        alt="Bannière"
      />

      <section className="text-center my-5">
        <h1 className="mt-4">Mon Blog</h1>
        <p className="mb-3">
          Découvrez mes articles et conseils autour du développement web, du
          design et du marketing digital.{" "}
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
      <div className="container mb-5">
        <div className="row gx-4 gy-4">
          {articleBlog.map((article, index) => (
            <div
              className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center"
              key={index}
            >
              <div className="card h-100  shadow-sm">
                <img
                  src={article.image}
                  className="card-img-top"
                  alt={article.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body  d-flex flex-column">
                  <h2 className="card-title">{article.title}</h2>
                  <p className="card-text">{article.description}</p>
                  <a
                    href={article.link}
                    className="btn btn-primary mt-auto"
                    style={{ width: "100px" }}
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
                  {article.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**  */
export default Blog;
