import Proyecto from "../models/Proyecto.js";
import Tarea from "../models/Tarea.js";

const agregarTarea = async (req, res) => {
  // 1. VALIDAR QUE EL PROYECTO EXISTA
  const { proyecto } = req.body;
  //2. TRAER EL PROYECTO Y VALIDAR QUE EXISTA
  const existeProyecto = await Proyecto.findById(proyecto);
  if (!existeProyecto) {
    const error = new Error("El proyecto no existe");
    return res.status(404).json({ msg: error.message });
  }

  //3. VALIDAR QUE EL PROYECTO QUE ESTOY TRAYENDO FUE CREADO POR EL USUARIO AUTENTICADO, EL USUARIO LO PASAEL CHECKAUTH
  if (existeProyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error(
      "No tienes permiso de añadir tareas en este proyecto"
    );
    return res.status(404).json({ msg: error.message });
  }

  try {
    const tareaAlmacenada = await Tarea.create(req.body);
    res.json(tareaAlmacenada);
  } catch (error) {
    console.log(error);
  }
};

const obtenerTarea = async (req, res) => {
  console.log("desde obtenerTarea");
};
const actualizarTarea = async (req, res) => {
  console.log("desde actualizarTarea");
};
const eliminarTarea = async (req, res) => {
  console.log("desde eliminarTarea");
};
const cambiarEstado = async (req, res) => {
  console.log("desde cambiarEstado");
};

export {
  agregarTarea,
  obtenerTarea,
  actualizarTarea,
  eliminarTarea,
  cambiarEstado,
};
