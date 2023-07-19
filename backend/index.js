import express from "express";
import dotenv from "dotenv";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import proyectoRoutes from "./routes/proyectoRoutes.js";
import tareaRoutes from "./routes/tareaRoutes.js";
import conectarDB from "./database/db.js";
import cors from "cors";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

//CONFIRGURAR CORS
const whiteList = [process.env.FRONTEND_URL];
// const corsOption = {
//   origin: function (origin, callback) {
//     if (whiteList.includes(origin)) {
//       //PUEDE CONSULTAR LA API
//       callback(null, true);
//     } else {
//       //NO ESTÁ PERMITIDO CONSULTAR
//       callback(new Error("Error de cors"));
//     }
//   },
// };

// app.use(cors(corsOption));


app.use(
  cors({
    origin: whiteList,
  })
);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/proyectos", proyectoRoutes);
app.use("/api/tareas", tareaRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
