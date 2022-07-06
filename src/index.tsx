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
