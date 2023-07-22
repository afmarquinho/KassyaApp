import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import KassyaApp from "./KassyaApp";
import { AuthProvider } from "./auth/context/AuthProvider";
import { ProyectosProvider } from "./kassya/context/ProyectosProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProyectosProvider>
          <KassyaApp />
        </ProyectosProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
