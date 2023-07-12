import jwt from "jsonwebtoken";
import Usuario from "../models/Usuarios.js";
Usuario;

const checkAuth = async (req, res, next) => {  

  let token;
  // SI EL TOKEN EXISTE
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // SI EL TOKEN ES VALIDO, ASIGNA EL USUARIO AL REQUEST Y PASA AL SIGUIENTE MIDDLEWARE
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.usuario = await Usuario.findById(decoded.id).select(
        "-password -confirmado -token -createdAt -updatedAt -__v"
      );
      return next();
      // SI EL TOKEN NO ES VALIDO O INCORRECTO MANDA MENSAJE DE ERROR
    } catch (error) {
      return res.status(404).json({ msg: "Hubo un error" });
    }
  }
  // SI EL TOKEN NO EXISTE CAMBIA STATUS Y MANDA MENSAJE
  if (!token) {
    const error = new Error("Token no válido");
    return res.status(404).json({ msg: error.message });
  }
  //
  next();
};
export default checkAuth;
