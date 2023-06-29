import { Link } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";

const NewPasswordPage = () => {
  return (
    <>
      <AuthLayout title="Restablecer Contraseña">
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
            />
          </div>
          <div className="input-group">
            <input
              type="submit"
              name="submit-register"
              className="submit-register"
              value="Restablecer"
              // onClick={onRegister}
            />
          </div>
          <p>
            Contraseña restablecida <Link to="auth/login">Inicia Sesión</Link>
          </p>
        </>
      </AuthLayout>
    </>
  );
};

export default NewPasswordPage;
