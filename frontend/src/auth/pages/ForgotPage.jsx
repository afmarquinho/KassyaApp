import { Link } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import AuthContext from "../context/AuthContext";
import { useContext, useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../../config/clienteAxios";

const ForgotPage = () => {
  const { email, onInputChange } = useContext(AuthContext);
  const [alerta, setAlerta] = useState({});
  const { msg } = alerta;

  const onRecover = async () => {
    //VALIDAR EL EMAIL POR UNA EXPRESION REGULAR
    //TODO: VALIDAR EL EMAIL CON EXPRESION REGULAR
    if (email === "") {
      setAlerta({ msg: "Introduzca un email válido", warning: true });
      return;
    }
    // PASA LA VALIDACION ENVIAMOS EL EMAIL AL BACKEND
    try {
      const { data } = await clienteAxios.post(`/usuarios/olvide-password`, {
        email,
      });
      setAlerta({
        msg: data.msg,
        ok: true,
      });
    } catch (error) {
      console.log();
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };
  return (
    <>
      <AuthLayout title="Restablecer">
        {msg && <Alerta mensajeAlerta={alerta} />}
        <>
          {" "}
          <div className="input-group">
            <label className="email-label label" htmlFor="email">
              email
            </label>
            <input
              type="email"
              name="email"
              className="email"
              placeholder="usuario@dominio.com"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <input
            type="submit"
            className="btn-submit"
            name="submit"
            value="Restablecer"
            onClick={onRecover}
          />
        </>
        <p className="nota-recuperacion">
          Se enviará un email al correo electronico registrado.
        </p>
      </AuthLayout>
    </>
  );
};

export default ForgotPage;
