import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const usuarioSchema = Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    token: {
      type: String,
    },
    confirmado: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// hasheo del password, se ejecuta antes de guardar (prev)

usuarioSchema.pre("save", async function (next) {
  // evita el doble hasheo del password, esta sentencia ya está establecida
  if (!this.isModified("password")) {
    next(); //ejecuta el siguiente middleware
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

usuarioSchema.methods.comprobarPassword = async function(passwordFormulario){
  return await bcrypt.compare(passwordFormulario,this.password )
} 

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;
