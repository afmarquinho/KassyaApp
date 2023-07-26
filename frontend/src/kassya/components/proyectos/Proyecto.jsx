import { useContext, useEffect, useState } from "react";
import ProyectosContext from "../../context/ProyectosProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import ModalTarea from "./ModalTarea";
import TareaPreview from "./TareaPreview";

const Proyecto = () => {
  const {
    obtenerProyecto,
    proyecto,
    cargando,
    eliminarProyecto,
    setMostrarModal,
  } = useContext(ProyectosContext);
  const param = useParams();
  const navigate = useNavigate();
  const { nombre, tareas } = proyecto;

  useEffect(() => {
    obtenerProyecto(param.id);
    setMostrarModal(false);
  }, []);
  useEffect(() => {}, [proyecto]);
  const onDelete = () => {
    if (
      confirm(
        "Si eliminas este proyecto no habrá forma de recuperarlo, ¿Confirmas?"
      )
    ) {
      eliminarProyecto(proyecto._id);
      window.alert("¡Proyecto Eliminado con Éxito!");

      navigate(-1);
    }
  };

  return (
    <>
      <Navbar title="PROYECTOS" ruta="/proyectos" />
      {cargando ? (
        <span>Cargando...</span>
      ) : (
        <div>
          <h2>{nombre}</h2>
          <Link to={`/proyecto/editar/${param.id}`}>
            {" "}
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
          <button onClick={onDelete}>
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
          <button onClick={() => setMostrarModal(true)}>
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
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      )}
      <h4>Tareas</h4>
      {/* //?tareas evita errore en la consola si es false */}
      {tareas?.length ? (
        tareas?.map((tarea) => <TareaPreview key={tarea._id} tarea={tarea} />)
      ) : (
        <p>no hay tareas</p>
      )}
      <ModalTarea titulo="Agreagar Tarea" />
    </>
  );
};

export default Proyecto;
