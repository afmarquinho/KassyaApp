import express from "express";
import { registrar } from "../controllers/usuarioController.js";

const router = express.Router();

//Autenticación, registro y confirmacion de usuarios
router.post("/",registrar);


export default router;
