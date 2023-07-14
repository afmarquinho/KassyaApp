import express from "express";
import {
  agregarTarea,
  obtenerTarea,
  actualizarTarea,
  eliminarTarea,
  cambiarEstado,
} from "../controllers/tareaController.js";
const router = express.Router();
import checkAuth from "../middlewares/checkAuth.js";

// Autenticación, Registro y Confirmación de Usuarios
router.post("/", checkAuth, agregarTarea);
router
  .route("/:id")
  .get(checkAuth, obtenerTarea)
  .put(checkAuth, actualizarTarea)
  .delete(checkAuth, eliminarTarea);
router.post("/estado/:id", checkAuth, cambiarEstado);

export default router;
