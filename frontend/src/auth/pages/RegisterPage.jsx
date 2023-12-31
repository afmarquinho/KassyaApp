import { Link } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Alerta from "../components/Alerta";
import clienteAxios from "../../config/clienteAxios";
import useForm from "../helpers/useForm";
import { useState } from "react";

const RegisterPage = () => {
  // *VARIABLES
  const initialState = {
    nombre: "",
    email: "",
    password: "",
    confirmaPassword: "",
  };

  const { formValues, onInputChange, onReset } = useForm(initialState);
  const { nombre, email, password, confirmaPassword } = formValues;
  const [alerta, setAlerta] = useState({});

  const onRegister = async () => {
    //TODO: VALIDAR POR EXPRESION EL CORREOS Y EL PASSWORD
    // *VALIDAR CAMPOS VACIOS
    if ([nombre, email, password, confirmaPassword].includes("")) {
      setAlerta({ msg: "*Diligencie todos los campos", warning: true });
      return;
    }
    // *VALIDAR COINCIDIR PASSWORDS
    if (password !== confirmaPassword) {
      setAlerta({ msg: "*Las contraseñas no coinciden", warning: true });
      return;
    }
    setAlerta("");
    // *CREANDO USUARIO EN LA API
    try {
      const { data } = await clienteAxios.post(`/usuarios`, {
        nombre,
        email,
        password,
      });
      onReset(initialState);
      setAlerta({ msg: data.msg, ok: true });
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

  return (
    <>
      <AuthLayout title="Regístrate">
        <>
          {alerta.msg && <Alerta mensajeAlerta={alerta} />}
          <div className="input-group">
            <label className="user-label label" htmlFor="nombre">
              Usuario
            </label>
            <input
              type="text"
              name="nombre"
              className="user"
              placeholder="crea un usuario"
              value={nombre}
              onChange={onInputChange}
            />
          </div>

          <div className="input-group">
            <label className="email-label label" htmlFor="email">
              email
            </label>
            <input
              type="email"
              name="email"
              className="email"
              placeholder="correo"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="input-group">
            <label className="user-label label" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              className="password"
              placeholder="contraseña"
              value={password}
              onChange={onInputChange}
            />
          </div>
          <div className="input-group">
            <label className="user-label label" htmlFor="confirmaPassword">
              Contraseña
            </label>
            <input
              type="password"
              name="confirmaPassword"
              className="password"
              placeholder="confirma contraseña"
              value={confirmaPassword}
              onChange={onInputChange}
            />
          </div>
          <div className="input-group">
            <input
              type="submit"
              name="submit-register"
              className="submit-register"
              value="Registrarse"
              onClick={onRegister}
            />
          </div>
          <br />
          <p className="ya-tienes-cuenta">
            ¿Ya tienes cuenta? <Link to="auth/login">ingrear</Link>
          </p>
          {/* <div className="input-group">
            <button
            type="button"
            name="btn-google"
            className="btn-google"
            value="confirma contraseña"> Registrarse con Google </button>            
        
          </div> */}
        </>
      </AuthLayout>
    </>
  );
};

export default RegisterPage;
