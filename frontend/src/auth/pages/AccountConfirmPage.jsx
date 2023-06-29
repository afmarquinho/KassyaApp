import { Link } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";

const AccountConfirmPage = () => {
  return (
    <>
      <AuthLayout title="Bienvenido a Kassya">
        <>
          <button className="btn-confirmacion">¡Click aquí para confirmar tu cuenta y empezar!</button>
          <p className="text-center  confirmacion">
            <Link to="/">
              Cuenta confirmada con éxito <span>Inicia Sesión</span>
            </Link>
          </p>
        </>
      </AuthLayout>
    </>
  );
};

export default AccountConfirmPage;
