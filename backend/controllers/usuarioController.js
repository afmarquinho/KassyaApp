import Usuario from "../models/Usuario,js";
import generarTOKEN from "../helpers/generarTOKEN";
import generarID from "../helpers/generarID";

const registrar = async (req, res) => {
  // Evitar registros duplicados
  const { email } = req.body;
  const existeUsuario = await Usuario.findOne({ email });

  if (existeUsuario) {
    const error = new Error("Usuario ya registrado");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const usuario = new Usuario(req.body);
    usuario.token = generarID();
    await usuario.save();

    res.json({
      msg: "Usuario Creado Correctamente, Revisa tu Email para confirmar tu cuenta",
    });
  } catch (error) {
    console.log(error);
  }
};

const autenticar = async (req, res) => {
    const { email, password } = req.body;
  
    // COMPROBAR SI EL USUARIO EXISTE
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      const error = new Error("El Usuario no existe");
      return res.status(404).json({ msg: error.message });
    }
  
    // COMPROBAR SI EL USUARIO ESTÁ CONFIRAMDO
    if (!usuario.confirmado) {
      const error = new Error("Tu Cuenta no ha sido confirmada");
      return res.status(403).json({ msg: error.message });
    }
  
    // COMPROBAR EL PASSWORD, VIENE DEL SCHEMA LA CREACION DEL METODO PARA COMPROBAR
    if (await usuario.comprobarPassword(password)) {
      res.json({
        _id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        token: generarTOKEN(usuario._id),
      });
    } else {
      const error = new Error("El Password es Incorrecto");
      return res.status(403).json({ msg: error.message });
    }
  };


const confirmar = async (req, res) => {};
const olvidePassword = async (req, res) => {};
const comprobarToken = async (req, res) => {};
const nuevoPassword = async (req, res) => {};
const perfil = async (req, res) => {};

export {
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
};
