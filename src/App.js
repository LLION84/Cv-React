import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Page home/Home";
import Header from "./components/Header/Header/Header";
import Footer from "./components/Footer/Footer";
import Service from "./pages/Page service/Service";
import Realisation from "./pages/Page réalisations/Realisation";
import Blog from "./pages/Page Blog/Blog";
import Contact from "./pages/Page Contact/Contact";
import MentionsLegales from "./pages/Page mentions légales/MentionsLegales";
import GitHubProfile from "./pages/GitHubProfile";

import "./App.css";

// Composant wrapper pour gérer l'affichage conditionnel de Header/Footer
const Layout = ({ children }) => {
  const location = useLocation();

  // définis les routes où tu ne veux pas afficher Header et Footer
  const hideHeaderFooter = location.pathname === "/github";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/realisation" element={<Realisation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentionlegales" element={<MentionsLegales />} />
          <Route path="/github" element={<GitHubProfile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
