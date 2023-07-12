import { generarID } from "../helpers/generarID.js";
import generarTOKEN from "../helpers/generarTOKEN.js";

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

const autenticar = async (req, res) => {
  const { email, password } = req.body;

  // TODO: comprobar que el usuario exista
  const usuario = await Usuario.findOne({ email });
  if (!usuario) {
    const error = new Error("Usuario no existe");
    return res.status(404).json({ msg: error.message });
  }

  // TODO: comprobar que el usuario esté confirmado
  if (!usuario.confirmado) {
    const error = new Error("Usuario no confirmado");
    return res.status(403).json({ msg: error.message });
  }

  // TODO: comprobar el password
  if (await usuario.comprobarPassword(password)) {
    res.json({
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      token: generarTOKEN(usuario._id),
    });
  } else {
    const error = new Error("Password Incorrecto");
    return res.status(403).json({ msg: error.message });
  }
};

const confirmar = async (req, res) => {
  // verificar que el token correcto en el param de la url
  const { token } = req.params;
  const usuarioConfirmar = await Usuario.findOne({ token });
  if (!usuarioConfirmar) {
    const error = new Error("Token no válido");
    return res.status(403).json({ msg: error.message });
  }
  // cambiar el estado del usuario a confrimado= true y
  //  borrar el token que es de un solo uso y lo mando a la bbdd con save
  try {
    usuarioConfirmar.confirmado = true;
    usuarioConfirmar.token = "";
    await usuarioConfirmar.save();
    res.json({ msg: "usuario confirmado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

const olvidePassword = async (req, res) => {
  const { email } = req.body;

  // TODO: comprobar que el usuario exista
  const usuario = await Usuario.findOne({ email });

  if (!usuario) {
    const error = new Error("Usuario no existe");

    return res.status(404).json({ msg: error.message });
  }
  //TODO: generar un nuevo token
  try {
    usuario.token = generarID();
    await usuario.save();
    res.json({ msg: "verifica el correo y sigue las instrucciones" });
  } catch (error) {
    console.log(error);
  }
};
const comprobarToken = async (req, res) => {
  const { token } = req.params;
  const tokenValido = await Usuario.findOne({ token });
  if (tokenValido) {
    res.json({ msg: "Token valido y el usuario existe" });
  } else {
    const error = new Error("Token no válido");
    res.status(404).json({ msg: error.message });
  }
};

const nuevoPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  // varificar el token sea valido, y cambiar el password y borrar token
  const usuario = await Usuario.findOne({ token });
  if (usuario) {
    usuario.password = password;
    usuario.token = "";
    try {
      await usuario.save();
      res.json({ msg: "password modificado correctamente" });
    } catch (error) {
      console.log(error);
    }
  }
};

const perfil = async (req, res) => {
  const { usuario } = req;
  res.json(usuario);
};
export {
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
};
