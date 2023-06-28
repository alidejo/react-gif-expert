import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";

import "./styless.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // La etiqueta <React.StrictMode>, solo se utiliza en desarrollo
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
