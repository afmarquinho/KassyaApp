import { generarID } from "../helpers/generarID.js";
import Usuario from "../models/Usuarios.js";

const registrar = async (req, res) => {
  // validar si el email ya esta registrado
  const { email } = req.body;
  const existeUsuario = await Usuario.findOne({ email });
  if (existeUsuario) {
    const error = new Error("Email ya está registrado");
    return res.status(400).json({ msg: error.message });
  }
  // fin validar si existe usuario

  try {
    const usuario = new Usuario(req.body);
    usuario.token = generarID();
    const usuarioAlmacenado = await usuario.save();

    res.json(usuarioAlmacenado);
  } catch (error) {
    console.log(error);
  }
};
export { registrar };
