import { createContext, useEffect } from "react";
import { useState } from "react";
import clienteAxios from "../../config/clienteAxios";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [auth, setAuth] = useState({});
  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const config = {
          headers: {
            "Content-Type": "application/jason",
            Authorization: `Bearer ${token}`,
          },
        };
        // ?EN LAS PETICIONES GET CON AXIOS, COLOCAR EL GET ES OPCIONAL
        const { data } = await clienteAxios("/usuarios/perfil", config);
        setAuth(data);
        if (data.usuario._id) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    autenticarUsuario();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
