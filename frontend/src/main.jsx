import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import KassyaApp from "./KassyaApp";
import { AuthContextProvider } from "./auth/context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <KassyaApp />
      </AuthContextProvider>
    </BrowserRouter>
  //  </React.StrictMode> 
);
