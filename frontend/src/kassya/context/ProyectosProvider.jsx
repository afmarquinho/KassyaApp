import { createContext, useState } from "react";
import clienteAxios from "../../config/clienteAxios";
const ProyectosContext = createContext();

const ProyectosProvider = ({ children }) => {
  const initialValues = {
    nombre: "",
    descripcion: "",
    tipoCliente: "",
    cliente: "",
    fechaEntrega: "",
    presupuesto: "",
    recursos: "",
    ubicacion: "",
    prioridad: "",
    tipo: "",
    otroTipo: "",
    alcance: "",
    notaAdicional: "",
  };
  const [proyectos, setProyectos] = useState([]); //* PARA ALMACENAR TODOS LOS PROYECTOS
  const [alerta, setAlerta] = useState({}); //* PARA LA ALERTA DEL ERRO

  const submitProyecto = async (proyecto) => {
    //*PROYECTO ES EL FORMVALUES
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const {data} = await clienteAxios.post("/proyectos", proyecto, config);
      console.log(data)
    } catch (error) {}
  };

  return (
    <ProyectosContext.Provider
      value={{ initialValues, proyectos, alerta, setAlerta, submitProyecto }}
    >
      {children}
    </ProyectosContext.Provider>
  );
};

export { ProyectosProvider };

export default ProyectosContext;
