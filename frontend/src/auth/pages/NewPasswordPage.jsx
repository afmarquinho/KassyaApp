import { Link, useParams } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import { useEffect, useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../../config/clienteAxios";

const NewPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const { msg } = alerta;
  const { token } = useParams();
  const [tokenValido, setTokenValido] = useState(false);
  const [passwordModificado, setPasswordModificado] = useState(false);

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios.get(
          `/usuarios/olvide-password/${token}`
        );
        setTokenValido(true);
      } catch (error) {
        setAlerta({ msg: error.response.data.msg, error: true });
      }
    };
    comprobarToken();
  }, []);

  const onResetPassword = async () => {
    //VALIDAR QUE LOS CAMPOS SEAN IGUALES
    //TODO: VALIDAR LAS CONTRASEÑAS CON EXPRESION REGULAR
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
    try {
      const url = `/usuarios/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });
      setAlerta({ msg: data.msg, ok: true });
      setPassword("");
      setConfirmPassword("");
      setPasswordModificado(true);
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };

  return (
    <>
      <AuthLayout title="Restablecer Contraseña">
        {msg && <Alerta mensajeAlerta={alerta} />}
        {tokenValido && (
          <>
            <div className="input-group">
              <label className="password-label label" htmlFor="newPassword">
                Password
              </label>
              <input
                type="password"
                className="password"
                placeholder="nueva contraseña"
                name="newPassword"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="input-group">
              <label className="password-label label" htmlFor="newPassword2">
                Password
              </label>
              <input
                type="password"
                className="password"
                placeholder="confirmar contraseña"
                name="newPassword2"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
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
