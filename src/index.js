import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import PrimeReact styles locally (avoid relying only on CDN links)
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import { PrimeReactProvider } from "primereact/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PrimeReactProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PrimeReactProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
