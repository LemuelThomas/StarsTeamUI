<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./components/GlobalState";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <App />
        </BrowserRouter>
    </GlobalProvider>
  // </React.StrictMode>
);
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <Router>
      <App/>
    </Router>
);
>>>>>>> 3aabb0514963b4287b54d73dc2ccfb4643f909a9
