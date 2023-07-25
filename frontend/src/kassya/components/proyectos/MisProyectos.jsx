import { useContext, useEffect } from "react";
import Navbar from "../../layout/Navbar";
import clienteAxios from "../../../config/clienteAxios";
import ProyectosContext from "../../context/ProyectosProvider";
import styled from "@emotion/styled";
import PreviewProyectos from "./PreviewProyectos";

const MisProyectos = () => {
  //?SACO EL USEEFFECT DEL PROVIDER PORQUE QUIERO OBTENER PROYECTOS SOLO ALENTRAR A ESTE MODULO, NO AL CARGAR LA APLICACION
  const { setProyectos, proyectos } = useContext(ProyectosContext);
  useEffect(() => {
    const obtenerProyectos = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios("/proyectos", config);
        setProyectos(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerProyectos();
  }, []);
  return (
    <>
      <Navbar title="PROYECTOS" ruta="/proyectos" />
      <Div className="contenedor">
        {proyectos.length ? (
          //? SIEMPRE QUE HAGA UN MAP PASAR UN KEY

          proyectos.map((proyecto) => (
            <PreviewProyectos key={proyecto._id} proyecto={proyecto} />
          ))
        ) : (
          <p className="no-proyectos">No tienes Proyectos aún</p>
        )}
      </Div>
    </>
  );
};

export default MisProyectos;
const Div = styled.div`
  width: 90%;
  max-width: 120rem;
  margin: 1rem auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-top:5rem;
  .no-proyectos {
    margin: 0;
    font-size: 2rem;
    font-style: italic;
    font-weight: 900;
  }
`;
