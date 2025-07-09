import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/path/to/your/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        padding: "60px 0",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 105, 255, 0.5)",
          zIndex: 1,
        }}
      ></div>

      <div
        className="container p-5"
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1 className="text-center">Me contacter</h1>
        <p className="text-center">
          Je suis développeur web junior passionné par la création de sites
          modernes et performants. N’hésitez pas à me contacter pour discuter
          d’un projet ou simplement échanger !
        </p>
        <div
          style={{
            width: "200px",
            height: "3px",
            backgroundColor: "blue",
            margin: "0 auto 40px auto",
          }}
        ></div>

        <div className="row align-items-stretch">
          <div className="col-12 col-sm-6 d-flex flex-column">
            <h4>Formulaire de contact</h4>
            <div
              style={{
                height: "2px",
                backgroundColor: "blue",
                marginBottom: "20px",
                width: "100%",
                borderRadius: "3px",
              }}
            ></div>

            <form className="d-flex flex-column flex-grow-1">
              <input
                type="text"
                className="form-control form-control-sm mb-2"
                placeholder="Nom"
                required
                style={{ color: "#666", opacity: 0.7 }}
              />
              <input
                type="email"
                className="form-control form-control-sm mb-2"
                placeholder="Email"
                required
                style={{ color: "#666", opacity: 0.7 }}
              />
              <input
                type="tel"
                className="form-control form-control-sm mb-2"
                placeholder="Numéro de téléphone"
                required
                style={{ color: "#666", opacity: 0.7 }}
              />
              <input
                type="text"
                className="form-control form-control-sm mb-2"
                placeholder="Sujet"
                required
                style={{ color: "#666", opacity: 0.7 }}
              />
              <textarea
                className="form-control form-control-sm mb-3"
                rows="6"
                placeholder="Message"
                required
                style={{ color: "#666", opacity: 0.7 }}
              ></textarea>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "120px" }}
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>

          <div className="col-12 col-sm-6 d-flex flex-column">
            <h4>Mes coordonnées</h4>
            <div
              style={{
                height: "2px",
                backgroundColor: "blue",
                marginBottom: "20px",
                width: "100%",
                borderRadius: "3px",
              }}
            ></div>

            <div className="flex-grow-1 d-flex flex-column justify-content-between">
              <div>
                <p
                  className="d-flex align-items-center"
                  style={{ gap: "10px" }}
                >
                  <i
                    className="bi bi-geo-alt-fill text-secondary"
                    style={{ fontSize: "1.2rem" }}
                  ></i>
                  <span>123 Rue Exemple, Paris, France</span>
                </p>
                <p
                  className="d-flex align-items-center"
                  style={{ gap: "10px" }}
                >
                  <i
                    className="bi bi-telephone-fill text-secondary"
                    style={{ fontSize: "1.2rem" }}
                  ></i>
                  <span>+33 1 23 45 67 89</span>
                </p>
              </div>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999296429659!2d2.292292615674556!3d48.85837317928745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdeb1dd0b87%3A0x6b7e0d1567d1e6dc!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1621510129715!5m2!1sfr!2sfr"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
