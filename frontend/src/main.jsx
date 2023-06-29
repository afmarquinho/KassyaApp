import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import KassyaApp from "./KassyaApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <KassyaApp />
    </BrowserRouter>
  </React.StrictMode>
);
