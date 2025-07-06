import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Page home/Home";
import Header from "./components/Header/Header/Header";
import Footer from "./components/Footer/Footer";
import Service from "./pages/Page service/Service";
import Realisation from "./pages/Page réalisations/Realisation";
import Blog from "./pages/Page Blog/Blog";
import Contact from "./pages/Page Contact/Contact";
import MentionsLegales from "./pages/Page mentions légales/MentionsLegales";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/realisation" element={<Realisation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentionlegales" element={<MentionsLegales />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
