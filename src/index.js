import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import "./index.scss";
import About from "./Pages/About";
import Home from "./Pages/Home";
import OurProducts from "./Pages/OurProducts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <OurProducts />
  </React.StrictMode>
);
