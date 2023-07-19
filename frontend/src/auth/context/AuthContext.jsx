import { createContext } from "react";
import useForm from "../helpers/useForm";
import { useState } from "react";

const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const initialValue = {
    nombre: "",
    email: "",
    password: "",
    confirmaPassword: "",
  };

  const { formValues, onInputChange, onReset } = useForm(initialValue);
  const { nombre, email, password, confirmaPassword } = formValues;
  const [isAuthenticated, seTisAuthenticated] = useState(false);
  const authentication = () => {
    seTisAuthenticated(!isAuthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        nombre,
        email,
        password,
        confirmaPassword,
        onInputChange,
        onReset,
        isAuthenticated,
        authentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };

export default AuthContext;
