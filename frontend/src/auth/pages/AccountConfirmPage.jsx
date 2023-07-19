import { Link, useParams } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import { useEffect, useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../../config/clienteAxios";

const AccountConfirmPage = () => {
  const params = useParams();
  const { token } = params;
  const [alerta, setAlerta] = useState({});
  const [confirmado, setConfirmado] = useState(false);

  const { msg } = alerta;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/usuarios/confirmar/${token}`;
        const { data } = await clienteAxios(url); // si es post despues de la url mando en un objeto la info, si es get no.
        setAlerta({ msg: data.msg, ok: true });
        setConfirmado(true);
      } catch (error) {
        setConfirmado(false);
        setAlerta({ msg: error.response.data.msg, error: true });
      }
    };
    confirmarCuenta();
  }, []);
  return (
    <>
      <AuthLayout title="Bienvenido a Kassya">
        <>
          {msg && <Alerta mensajeAlerta={alerta} />}
          {confirmado && (
            <p className="text-center  confirmacion">
              <Link to="/">Inicia Sesión</Link>
            </p>
          )}
        </>
      </AuthLayout>
    </>
  );
};

export default AccountConfirmPage;
