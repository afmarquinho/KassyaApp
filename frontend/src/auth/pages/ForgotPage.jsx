import { Link } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";



const ForgotPage = () => {
  return (
    <>
      <AuthLayout title="Restablecer">
        <>            <div className="input-group">
              <label className="email-label label" htmlFor="email">
                email
              </label>
              <input
                type="email"
                name="email"
                className="email"
                placeholder="usuario@dominio.com"
              />
            </div>

            <input
              type="submit"
              className="btn-submit"
              name="submit"
              value="Restablecer"
            />         
        </>
          <p className="nota-recuperacion">Se enviará un email, al correo electronico registrado.</p>
      </AuthLayout>
    </>
  );
};

export default ForgotPage;