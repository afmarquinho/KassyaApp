import Proyecto from "../models/Proyectos.js";

const obtenerProyectos = async (req, res) => {
  // const proyectos = await Proyecto.find(); -->trae todos los proyectos sin filtrar
  // obtener los proyectos filtrados creador = usuario autenticado
  const proyectos = await Proyecto.find()
    .where("creador")
    .equals(req.usuario._id);

  res.json(proyectos);
};

const nuevoProyecto = async (req, res) => {
  const { usuario } = req;

  const proyecto = new Proyecto(req.body);
  proyecto.creador = usuario._id;
  try {
    const proyectoAlmacenado = await proyecto.save();
    res.json(proyectoAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const obtenerProyecto = async (req, res) => {
  const { id } = req.params; //--> obtener el parametro del ID, la ruta es dinámica
  const proyecto = await Proyecto.findById(id);
  res.json(proyecto);
  if (!proyecto) {
    const error = new Error("No Encontrado");
    return res.status(404).json({ msg: error.message });
  }
  //VERIFICA QUE EL ID DEL USUARIO AUTENTICADO SEA IGUAL AL CREADOR DEL PROYECTO, SE CONVIERTE A STRING YA QUE ES UN OBJETO
  if (proyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Acción no válida");
    return res.status(401).json({ msg: error.message });
  }
};

const editarProyecto = async (req, res) => {
  //LEO QUE EXISTA EL PROYECTO Y LO VERIFICO, REPITO EL CODIGO DE ARRIBA
  const { id } = req.params;
  const proyecto = await Proyecto.findById(id);
  res.json(proyecto);
  if (!proyecto) {
    const error = new Error("No Encontrado");
    return res.status(404).json({ msg: error.message });
  }
  if (proyecto.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error("Acción no válida");
    return res.status(401).json({ msg: error.message });
  }
  // REEMPLAZO LO QUE LE MANDO POR FRONT O DEJO LO QUE TIENE CADA CAMPO PERDER LA INFO
  proyecto.nombre = req.body.nombre || proyecto.nombre;
  proyecto.descripcion = req.body.descripcion || proyecto.descripcion;
  proyecto.fechaEntrega = req.body.fechaEntrega || proyecto.fechaEntrega;
  proyecto.cliente = req.body.cliente || proyecto.cliente;
  try {
    const proyectoAlmacenado = await proyecto.save();
    res.json(proyectoAlmacenado)  
  } catch (error) {
    console.log(error)
  }
};

const eliminarProyecto = async (req, res) => {
   //LEO QUE EXISTA EL PROYECTO Y LO VERIFICO, REPITO EL CODIGO DE ARRIBA
   const { id } = req.params;
   const proyecto = await Proyecto.findById(id);
   res.json(proyecto);
   if (!proyecto) {
     const error = new Error("No Encontrado");
     return res.status(404).json({ msg: error.message });
   }
   if (proyecto.creador.toString() !== req.usuario._id.toString()) {
     const error = new Error("Acción no válida");
     return res.status(401).json({ msg: error.message });
   }
   // elimino el proyecto
   try {
    await proyecto.deleteOne()
    res.json({msg: "Proyecto Eliminado"})
   } catch (error) {
    console.log(error)
    
   }

};

const agregarColaborador = async (req, res) => {};

const eliminarColaborador = async (req, res) => {};

const obtenerTareas = async (req, res) => {};

export {
  obtenerProyectos,
  nuevoProyecto,
  obtenerProyecto,
  editarProyecto,
  eliminarProyecto,
  agregarColaborador,
  eliminarColaborador,
  obtenerTareas,
};
