import { Contenedor } from "../styles/authStyles";

const AuthLayout = ({ children, title = "" }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Contenedor className="form-contenedor">
        <h1 className="logo-name">Kassya</h1>
        <form action="" className="form" onSubmit={onSubmit}>
          <h2 className="login-title">{title}</h2>
          {children}
        </form>
      </Contenedor>
    </>
  );
};

export default AuthLayout;