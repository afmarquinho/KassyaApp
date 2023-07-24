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
    //?ALMACENAR EL ID DE LA TAREA EN EL PROYECTO, ESTOY MODIFICANDO EL PROYECTO DESDE AQUI CON UN METODO PUSH
    existeProyecto.tareas.push(tareaAlmacenada._id);
    await existeProyecto.save(); //*GUARDO EL PROYECTO ACTUAL
    res.json(tareaAlmacenada);
  } catch (error) {
    console.log(error);
  }
};

const obtenerTarea = async (req, res) => {
  const { id } = req.params;
  // METODO POPULATE CRUZA LAS BBDD CONRRESPONDIENTES SEGUN DECLARADO EN EL SCHEMA, PARA MAS CLARIDAD HACER UN CONSOLE.LOG A "tarea" LINEA 34
  const tarea = await Tarea.findById(id).populate("proyecto");
  if (!tarea) {
    const error = new Error("Tarea no encontrada");
    return res.status(404).json({ msg: error.message });
  }
  // VALIDAR QUE LAS TAREAS A OBTENER SEAN LAS CREADAS POR EL USUARIO AUTENTICADO
  if (tarea.proyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error(
      "Acción no válida -- No tienes permiso de añadir ver estas tareas"
    );
    return res.status(403).json({ msg: error.message });
  }
  res.json(tarea);
};
const actualizarTarea = async (req, res) => {
  //MISMAS COMPROBACIONES:
  // LEO EL PARAM, LLAMO LA TAREA POR EL ID DEL PARAM, VERIFICO QUE LA TAREA EXISTA, VERIFICO QUE TENGA PERMISOS PARA VER LA TAREA
  const { id } = req.params;
  const tarea = await Tarea.findById(id).populate("proyecto");
  if (!tarea) {
    const error = new Error("Tarea no encontrada");
    return res.status(404).json({ msg: error.message });
  }
  if (tarea.proyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error(
      "Acción no válida -- No tienes permiso de añadir o ver estas tareas"
    );
    return res.status(403).json({ msg: error.message });
  }
  //ACTUALIZO LA TAREA CON LOS NUEVOS PARAMS
  tarea.nombre = req.body.nombre || tarea.nombre;
  tarea.descripcion = req.body.descripcion || tarea.descripcion;
  tarea.prioridad = req.body.prioridad || tarea.prioridad;
  tarea.fechaEntrega = req.body.fechaEntrega || tarea.fechaEntrega;
  try {
    const tareaAlmacenada = await tarea.save();
    res.json(tareaAlmacenada);
  } catch (error) {
    console.log(error);
  }
};
const eliminarTarea = async (req, res) => {
  //MISMAS COMPROBACIONES:
  // LEO EL PARAM, LLAMO LA TAREA POR EL ID DEL PARAM, VERIFICO QUE LA TAREA EXISTA, VERIFICO QUE TENGA PERMISOS PARA VER LA TAREA
  const { id } = req.params;
  const tarea = await Tarea.findById(id).populate("proyecto");
  if (!tarea) {
    const error = new Error("Tarea no encontrada");
    return res.status(404).json({ msg: error.message });
  }
  if (tarea.proyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error(
      "Acción no válida -- No tienes permiso de añadir o ver estas tareas"
    );
    return res.status(403).json({ msg: error.message });
  }
  try {
    await tarea.deleteOne();
    res.json({ msg: "Tarea eliminada correctamente" });
  } catch (error) {
    console.log(error);
  }
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
