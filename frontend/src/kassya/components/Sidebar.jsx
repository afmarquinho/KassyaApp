import { Link as NavLink, useNavigate } from "react-router-dom";
import { Contenedor } from "../styles/sedebar";

const SideBar = () => {
  const navigate = useNavigate();
  //TODO: BORRAR EL TOKEN DEL LOCAL STORAGE
  const onLogout = () => {
    navigate("auth/login");

  };
  return (
    <Contenedor>
      <div className="subcontenedor">
        {/* //TODO: CAMBIAR USUARIO POR EL NOMBRE DEL USUARIO CON EL STATE AUTH O DATOS DEL LOGIN */}
        <p className="sidebarelement usuario">USUARIO</p>
        <p className=" sidebarelement modulo">MODULO</p>
        <NavLink
          to="/analisis-datos"
          className="sidebarelement btn-navegacion btn-datos"
        >
          Análisis de Datos
        </NavLink>
        <NavLink
          className="sidebarelement btn-navegacion btn-clientes "
          to="/clientes"
        >
          Clientes
        </NavLink>
        <NavLink
          className="sidebarelement btn-navegacion btn-compras"
          to="/compras"
        >
          Compras
        </NavLink>
        <NavLink
          className="sidebarelement btn-navegacion btn-inventario"
          to="/inventario"
        >
          Inventario
        </NavLink>
        <NavLink
          className="sidebarelement btn-navegacion btn-logistica"
          to="/logistica"
        >
          Logística
        </NavLink>
        <NavLink
          className="sidebarelement btn-navegacion btn-marketing"
          to="/marketing"
        >
          Marketing
        </NavLink>
        <NavLink
          className="sidebarelement btn-navegacion btn-proveedores"
          to="/proveedores"
        >
          Proveedores
        </NavLink>
        <NavLink
          className="sidebarelement btn-navegacion btn-proyectos"
          to="/proyectos"
        >
          Proyectos
        </NavLink>
        <NavLink className="sidebarelement btn-navegacion btn-RRHH" to="/RRHH">
          RRHH
        </NavLink>
        <NavLink
          className="sidebarelement btn-navegacion btn-servcliente"
          to="/serv-cliente"
        >
          Servicio al Cliente
        </NavLink>
        <NavLink
          className="sidebarelement btn-navegacion btn-ventas"
          to="/ventas"
        >
          Ventas
        </NavLink>
      </div>
      <button className="btn-logout" onClick={onLogout}>
        Cerrar Sesión
      </button>
    </Contenedor>
  );
};

export default SideBar;
