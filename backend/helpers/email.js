import nodemailer from "nodemailer";

export const emailRegister = async (datos) => {
  try {
    const { nombre, email, token } = datos;
    // CONFIGURAR EL TRANSPORTE DEL CORREO
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    //CONFIGURAR EL MENSAJE
    const mailOptions = {
      from: '"Kassya - Gestor Empresarial" <cuentas@kassya.com>',
      to: email,
      subject: "Kassya - Confirmación de cuenta",
      text: "¡Gracias por registrarte en nuestro sitio!",
      html: `<p>Bienvenido: ${nombre}.</p>
          <p>Tu cuenta está casi lista, da click en el siguiente enlace:
           <a href="${process.env.FRONTEND_URL}/auth/account-confirmation/${token}">Confirma Aquí</a>
           </p>
           <p>Si no compruebas tu cuenta pronto será eliminada, si no fuiste tú ignora este mensaje</p>,
           `,
    };
    // ENVIAR EL MENSAJE
    await transport.sendMail(mailOptions);
  } catch (error) {
    console.log("Error al enviar el correo: ", error);
  }
};

export const emailOlvidePassword = async (datos) => {
  try {
    const { nombre, email, token } = datos;
    // CONFIGURAR EL TRANSPORTE DEL CORREO
    //TODO: MOVER HACIA VARIABLES DE ENTORNO
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    //CONFIGURAR EL MENSAJE
    const mailOptions = {
      from: '"Kassya - Gestor Empresarial" <cuentas-recuperacion@kassya.com>',
      to: email,
      subject: "Kassya - Restablecer Password",
      text: "¡Recupera tu cuenta!",
      html: `<p>${nombre} parece que has olvidado tu password.</p>
          <p>Sigue el siguiente enlace para establecer un nuevo password:
           <a href="${process.env.FRONTEND_URL}/auth/new-password/${token}">Restablecer</a>
           </p>
           <p>Si no fuiste tú, ignora este mensaje</p>,
           `,
    };
    // ENVIAR EL MENSAJE
    await transport.sendMail(mailOptions);
  } catch (error) {
    console.log("Error al enviar el correo: ", error);
  }
};
