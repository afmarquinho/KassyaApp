import AuthLayout from "../layout/AuthLayout";
import { useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../../config/clienteAxios";
import useForm from "../helpers/useForm";

const ForgotPage = () => {
  const initialState = { email: "" };
  const { formValues, onInputChange } = useForm(initialState);
  const { email } = formValues;
  const [alerta, setAlerta] = useState({});

  const onRecover = async () => {
    // *VALIDAR EMAIL NO ESTÉ VACÍO
    if (email === "") {
      setAlerta({ msg: "Introduzca un email válido", warning: true });
      return;
    }
    // *ENVIAR EL EMAIL AL BACKEND
    try {
      const { data } = await clienteAxios.post(`/usuarios/olvide-password`, {
        email,
      });
      setAlerta({
        msg: data.msg,
        ok: true,
      });
    } catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };
  return (
    <>
      <AuthLayout title="Restablecer">
        {alerta.msg && <Alerta mensajeAlerta={alerta} />}
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
