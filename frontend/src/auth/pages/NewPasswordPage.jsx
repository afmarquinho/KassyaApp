import { Link, useParams } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import { useEffect, useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../../config/clienteAxios";
import useForm from "../helpers/useForm";

const NewPasswordPage = () => {
  const initialValue = { password: "", confirmPassword: "" };
  const { formValues, onInputChange, onReset } = useForm(initialValue);
  const { password, confirmPassword } = formValues;
  const [alerta, setAlerta] = useState({});
  const { token } = useParams();
  const [tokenValido, setTokenValido] = useState(false);
  const [passwordModificado, setPasswordModificado] = useState(false);

  useEffect(() => {
    // *CONSULTA LA BBDD PARA VERIFICAR SI EL TOKEN ES VALIDO 
    const comprobarToken = async () => {
      try {
        await clienteAxios.get(`/usuarios/olvide-password/${token}`);
        // *STATE PARA MOSTRAR EL FORMULARIO SI EL TOKEN ES VÁLIDO
        setTokenValido(true);
      } catch (error) {
        setAlerta({ msg: error.response.data.msg, error: true });
      }
    };
    comprobarToken();
  }, []);

  const onResetPassword = async () => {
    //TODO: VALIDAR LAS CONTRASEÑAS CON EXPRESION REGULAR
    // *VALIDAR QUE LOS CAMPOS SEAN IGUALES Y NO ESTEN VACÍOS
    if ([password, confirmPassword].includes("")) {
      setAlerta({ msg: "No pueden haber campos vacíos", warning: true });
      return;
    }
    if (password !== confirmPassword) {
      setAlerta({
        msg: "Las contraseñas nos coinciden",
        warning: true,
      });
      return;
    }
    // *MANDA A BBDD NUEVO PASSWORD
    try {
      const url = `/usuarios/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });
      setAlerta({ msg: data.msg, ok: true });
      onReset(initialValue);
      setPasswordModificado(true);
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

  return (
    <>
      <AuthLayout title="Restablecer Contraseña">
        {alerta.msg && <Alerta mensajeAlerta={alerta} />}
        {tokenValido && (
          <>
            <div className="input-group">
              <label className="password-label label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="password"
                placeholder="nueva contraseña"
                value={password}
                onChange={onInputChange}
              />
            </div>
            <div className="input-group">
              <label className="password-label label" htmlFor="confirmPassword">
                Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="password"
                placeholder="confirma contraseña"
                value={confirmPassword}
                onChange={onInputChange}
              />
            </div>
            <div className="input-group">
              <input
                type="submit"
                name="submit-register"
                className="submit-register"
                value="Restablecer"
                onClick={onResetPassword}
              />
            </div>
          </>
        )}
        {passwordModificado && (
          <p className="text-center  confirmacion">
            <Link to="/">Inicia Sesión</Link>
          </p>
        )}
      </AuthLayout>
    </>
  );
};

export default NewPasswordPage;
