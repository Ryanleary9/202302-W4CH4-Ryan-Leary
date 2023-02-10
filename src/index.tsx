import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./core/app/App";
import reportWebVitals from "./reportWebVitals";
import { Main } from "./core/main/main";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Main></Main>
  </React.StrictMode>
);
reportWebVitals();
