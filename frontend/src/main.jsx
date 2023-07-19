import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import KassyaApp from "./KassyaApp";
import { AuthProvider } from "./auth/context/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <KassyaApp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
