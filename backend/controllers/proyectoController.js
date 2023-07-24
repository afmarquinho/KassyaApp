import Proyecto from "../models/Proyecto.js";
import Tarea from "../models/Tarea.js";
import Usuario from "../models/Usuario.js";

// const obtenerProyectosTodos = async (req, res) => { --> trae todos los proyectos
//     const proyectos = await Proyecto.find()
// };

const obtenerProyectos = async (req, res) => {
  const proyectos = await Proyecto.find()
    .where("creador")
    .equals(req.usuario)
    .select("-tareas"); //* AL NO TRAIGO LAS TAREAS PORQIE NO LAS NECESITO, ES INFO DE MAS ENTRE MAS LIGERO ES EL REQUEST MAS LIGERA EN MI APP
  res.json(proyectos);
};

const nuevoProyecto = async (req, res) => {
  const proyecto = new Proyecto(req.body);
  proyecto.creador = req.usuario._id;

  try {
    const proyectoAlmacenado = await proyecto.save();
    res.json(proyectoAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const obtenerProyecto = async (req, res) => {
  const { id } = req.params;

  const proyecto = await Proyecto.findById(id).populate("tareas"); //?POPULATE MUESTRA EL OBJETO DE LAS TAREAS Y NO SOLO EL ID

  if (!proyecto) {
    const error = new Error("No Encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (proyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Acción No Válida");
    return res.status(401).json({ msg: error.message });
  }
  // LLAMAR LAS TAREAS ASOCIADAS AL PROYECTO, AUNQUE TAMBIEN SE PUEDE LLAMAR EN UNA FUNCION APARTE, LLAMADA OBTENER TAREAS.
  const tareas = await Tarea.find().where("proyecto").equals(proyecto._id);
  res.json(proyecto);
};

const editarProyecto = async (req, res) => {
  // TENGO QUE REALIZAR LA MISMA VALIDACION ANTERIOR, LEERLO, QUE EXISTA Y QUE CORRESPONDA AL USUARIO AUTENTICADO
  const { id } = req.params;

  const proyecto = await Proyecto.findById(id);

  if (!proyecto) {
    const error = new Error("No Encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (proyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Acción No Válida");
    return res.status(401).json({ msg: error.message });
  }
  // FIN DE LA VALIDACION
  proyecto.nombre = req.body.nombre || proyecto.nombre;
  proyecto.descripcion = req.body.descripcion || proyecto.descripcion;
  proyecto.fechaEntrega = req.body.fechaEntrega || proyecto.fechaEntrega;
  proyecto.cliente = req.body.cliente || proyecto.cliente;

  try {
    const proyectoAlmacenado = await proyecto.save();
    res.json(proyectoAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const eliminarProyecto = async (req, res) => {
  const { id } = req.params;
  // TENGO QUE REALIZAR LA MISMA VALIDACION ANTERIOR, LEERLO, QUE EXISTA Y QUE CORRESPONDA AL USUARIO AUTENTICADO, SOLO PUEDE ELIMINAR UN PROYECTO QUIEN LO CREÓ
  const proyecto = await Proyecto.findById(id);

  if (!proyecto) {
    const error = new Error("No Encontrado");
    return res.status(404).json({ msg: error.message });
  }

  if (proyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Acción No Válida");
    return res.status(401).json({ msg: error.message });
  }
  // FIN VALIDACION
  try {
    await proyecto.deleteOne();
    res.json({ msg: "Proyecto Eliminado" });
  } catch (error) {
    console.log(error);
  }
};

const agregarColaborador = async (req, res) => {
  console.log("desde agregar colaborador");
};

const eliminarColaborador = async (req, res) => {
  console.log("desde eliminar colaborador");
};

export {
  obtenerProyectos,
  nuevoProyecto,
  obtenerProyecto,
  editarProyecto,
  eliminarProyecto,
  agregarColaborador,
  eliminarColaborador,
};
