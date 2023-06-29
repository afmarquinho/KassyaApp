import { Link } from "react-router-dom"
import AuthLayout from "../layout/AuthLayout"



const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Regístrate">
        <>
          <div className="input-group">
            <label className="user-label label" htmlFor="user">
              Usuario
            </label>
            <input
              type="text"
              name="user"
              className="user"
              placeholder="crea un usuario"
              // value={displayName}
              // onChange={onInputChange}
            />
          </div>
          {/* <Error mensajeError ='Nombre no disponible'/> */}

          <div className="input-group">
            <label className="email-label label" htmlFor="email">
              email
            </label>
            <input
              type="email"
              name="email"
              className="email"
              placeholder="correo"
              // value={email}
              // onChange={onInputChange}
            />
          </div>
          <div className="input-group">
            <label className="user-label label" htmlFor="user">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              className="password"
              placeholder="confirma contraseña"
              // value={password}
              // onChange={onInputChange}
            />
          </div>
          <div className="input-group">
            <input
              type="submit"
              name="submit-register"
              className="submit-register"
              value="Registrarse"
              // onClick={onRegister}
            />
          </div>
          <br />
          <p className="ya-tienes-cuenta">
            ¿Ya tienes cuenta? <Link to="auth/login">ingrear</Link>
          </p>
          {/* <div className="input-group">
            <button
            type="button"
            name="btn-google"
            className="btn-google"
            value="confirma contraseña"> Registrarse con Google </button>            
        
          </div> */}
        </>
      </AuthLayout>
    </>
    
  )
}

export default RegisterPage

