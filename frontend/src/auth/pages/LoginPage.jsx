import { Link } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import { useContext, useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../../config/clienteAxios";
import useForm from "../helpers/useForm";
import AuthContext from "../context/AuthProvider";

const LoginPage = () => {
  // *VARIABLES
  const initialValue = { email: "", password: "" };
  const { formValues, onInputChange } = useForm(initialValue);
  const { email, password } = formValues;
  const [alerta, setAlerta] = useState("");
  const { msg } = alerta;
  const { setAuth, setIsAuthenticated } = useContext(AuthContext);

  const onLogin = async () => {
    // *VALIDAR CAMPOS VACIOS
    if ([email, password].includes("")) {
      setAlerta({ msg: "No pueden haber campos vacíos", warning: true });
      return;
    }
    try {
      const { data } = await clienteAxios.post("/usuarios/login", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      setAuth(data);
      if(data._id){
        setIsAuthenticated(true)
      }
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };
  return (
    <>
      <AuthLayout title="Login">
        <>
          {msg && <Alerta mensajeAlerta={alerta} />}
          <div className="input-group">
            <label className="email-label label" htmlFor="email">
              Usuario
            </label>
            <input
              type="email"
              name="email"
              className="email"
              placeholder="correo"
              value={email}
              onChange={onInputChange}
              autoComplete="username"
            />
          </div>

          <div className="input-group">
            <label className="password-label label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="password"
              placeholder="contraseña"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={onInputChange}

            />
          </div>
          <input
            // disabled={isAuthenticating}
            type="submit"
            className="btn-submit"
            name="submit"
            value="Iniciar Sesión"
            onClick={onLogin}
          />
          <div className="input-group">
            <button
              // disabled={isAuthenticating}
              type="button"
              name="btn-google"
              className="btn-google"
              // onClick={onGoogleSignIn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 48 48"
                width="25px"
                height="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              <p>Iniciar con Google</p>
            </button>
          </div>
          <br />
          <p className="ya-tienes-cuenta">
            ¿No tienes cuenta aún? <Link to="/auth/register">¡Regístrate!</Link>
          </p>
          <p className="restablecer">
            <Link to="/auth/forgot">Restablecer contraseña</Link>
          </p>
        </>
      </AuthLayout>
    </>
  );
};

export default LoginPage;
