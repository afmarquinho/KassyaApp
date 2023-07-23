import { useContext, useEffect } from "react";
import ProyectosContext from "../../context/ProyectosProvider";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar";

const Proyecto = () => {
  const { obtenerProyecto, proyecto, cargando } = useContext(ProyectosContext);
  const param = useParams();
  useEffect(() => {
    obtenerProyecto(param.id);
  }, []);
  const { nombre } = proyecto;

  return (
    <>
      <Navbar title="PROYECTOS" ruta="/proyectos" />
      {cargando ? (
        <span>Cargando...</span>
      ) : (
        <div>
          <h2>{nombre}</h2>
          <Link to={`/proyecto/editar/${param.id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              height="40"
              width="40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>

            <span>EDITAR</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default Proyecto;
