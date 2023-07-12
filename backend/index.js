import express from "express";
import dbConnection from "./database/config.js";
import dotenv from "dotenv";
import usuarioRoutes from "./routes/usuariosRoutes.js";
import proyectoRoutes from "./routes/proyectoRoutes.js";


// crear el servidor de aexpress
const app = express();
app.use(express.json());
dotenv.config();

dbConnection();

// routing
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/proyectos", proyectoRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`corriendo en el puerto ${PORT}`);
});
