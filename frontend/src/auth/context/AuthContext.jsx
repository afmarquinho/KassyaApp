import { createContext } from "react";
import useForm from "../helpers/useForm";
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const initialState = {
    nombre: "",
    email: "",
    password: "",
    confirmaPassword: "",
  };

  const { formValues, onInputChange, onReset } = useForm(initialState);
  const {nombre, email, password, confirmaPassword} = formValues

  return (
    <AuthContext.Provider value={{ nombre, email, password, confirmaPassword, onInputChange, onReset }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };

export default AuthContext;
