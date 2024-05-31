import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Technologies />
    <Projects />
    <Experience />
    <Footer />
  </React.StrictMode>
);
