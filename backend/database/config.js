import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Otras opciones de configuración, si es necesario
    });
    const url = `${connection.connection.host}:${connection.connection.port} `;
    console.log(`MongoDb conectado en: ${url} `);

    console.log("Conexión exitosa a MongoDB!!!");
  } catch (error) {
    throw new Error("error al iniciar la bbdd");
    
  }
};
export default dbConnection;
