import { createContext, useEffect, useState } from "react";
import clienteAxios from "../../config/clienteAxios";
const ProyectosContext = createContext();

const ProyectosProvider = ({ children }) => {
  const initialValues = {
    nombre: "",
    descripcion: "",
    tipoCliente: "",
    cliente: "",
    fechaEntrega: "",
    presupuesto: "",
    recursos: "",
    ubicacion: "",
    prioridad: "",
    tipo: "",
    alcance: "",
    notaAdicional: "",
  };
  const [proyectos, setProyectos] = useState([]); //* PARA ALMACENAR TODOS LOS PROYECTOS
  const [alerta, setAlerta] = useState({}); //* PARA LA ALERTA DEL ERROR
  const [proyecto, setProyecto] = useState({});
  const [cargando, setCargando] = useState(false); //TODO: PONER SPINNER CON ESTE STATE EN TRUE
  const [mostrarModal, setMostrarModal] = useState(false); //*MODAL DEL FORMULARIO DE TAREAS
  const [modalNuevoProyecto, setModalNuevoProyecto] = useState(false);

  //*BLOQUE DE PROYECTOS
  const submitProyecto = async (proyecto) => {
    if (proyecto.id) {
      editarProyecto(proyecto);
      return;
    } else {
      crearNuevoProyecto(proyecto);
      return;
    }
  };

  const crearNuevoProyecto = async (proyecto) => {
    //*PROYECTO ES EL FORMVALUES
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.post("/proyectos", proyecto, config);
      //?PARA EVITAR CONSULTAR LA DATA, METO EN UN ARRAY EL NUEVO PROYECTO CREADO
      setProyectos(...proyectos, data);
    } catch (error) {}

    console.log("creando...");
  };
  const editarProyecto = async (proyecto) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.put(
        `/proyectos/${proyecto.id}`,
        proyecto,
        config
      );
      //?SINCRONIZAR EL ARRAY DE PROYECTOS CO ELACTUALIZADO, ES OPCIONAL.
      const proyectosActualizados = proyecto.map((proyectoState) =>
        proyectoState._id === data._id ? data : proyectoState
      );
      setProyectos(proyectosActualizados);
    } catch (error) {}
  };

  const obtenerProyecto = async (id) => {
    setCargando(true); //*PORQUE HAGO LA CONSULTA, MIENTRAS ES TRUE MUESTRA EL SPINNER
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios(`/proyectos/${id}`, config);
      setProyecto(data);
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
    }
  };

  const eliminarProyecto = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.delete(`/proyectos/${id}`, config);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //*BLOQUE DE TAREAS

  const submitTarea = async (tarea) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clienteAxios.post("/tareas", tarea, config);
      //COMO YA TENGO EL PROYECTO EN EL STATE SOLO LO ACTUALIZO, AGREGO LA TAERANUEVA PARA RENDERIZARLO SIN CONSULTAR LA API
      const proyectoActualizado = {...proyecto}
      proyectoActualizado = {...proyecto.tareas, data}
      setProyecto(proyectoActualizado)
    } catch (error) {
      //   console.log(error);
    }
  };
  //*BLOQUE DE MODALES
  const cambiarModal = () => {
    setMostrarModal(false);
  };
  return (
    <ProyectosContext.Provider
      value={{
        initialValues,
        proyectos,
        setProyectos,
        alerta,
        setAlerta,
        submitProyecto,
        obtenerProyecto,
        proyecto,
        cargando,
        eliminarProyecto,
        mostrarModal,
        setMostrarModal,
        cambiarModal,
        submitTarea,
        modalNuevoProyecto,
        setModalNuevoProyecto,
      }}
    >
      {children}
    </ProyectosContext.Provider>
  );
};

export { ProyectosProvider };

export default ProyectosContext;
