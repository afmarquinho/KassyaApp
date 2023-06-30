import express from "express";
import dbConnection from "./database/config.js";
import dotenv from "dotenv";
import router from "./routes/usuariosRoutes.js";

// crear el servidor de aexpress
const app = express();
app.use(express.json());
dotenv.config();

dbConnection();

// routing
app.use("/api/usuarios", router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`corriendo en el puerto ${PORT}`);
});
