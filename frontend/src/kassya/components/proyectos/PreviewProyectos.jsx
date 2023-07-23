import styled from "@emotion/styled";
import { Link } from "react-router-dom";
// import { elegirColorAleatorio } from "../../helpers/coloresAleatorios";

// const colores = [
//   "#FF0000",
//   "#00FF00",
//   "#0000FF",
//   "#FFFF00",
//   "#FF00FF",
//   "#00FFFF",
//   "#FFA500",
//   "#800080",
//   "#008000",
//   "#000080",
//   "#800000",
//   "#008080",
//   "#FFC0CB",
//   "#00FF7F",
//   "#FF7F50",
//   "#FF4500",
//   "#C71585",
//   "#B0E0E6",
//   "#FFFFE0",
//   "#00CED1",
// ];

const Div = styled.div`
  margin: 0;
  margin-bottom: 0.1rem;
  background-color: #f0f0f0;
  border-radius: 0.5rem;
  padding: 2rem;
  border-left: #f8f404 solid 1rem;
  .nombre-proyecto {
    display: flex;
    justify-content: space-between;
    .sub-container {
      margin: 0;
      .cliente {
        color: gray;
        font-size: 1rem;
        margin-left: 1rem;
        @media (max-width: 768px) {
          display: none;
        }
      }
      .nombre {
        color: black;
        font-style: italic;
        font-weight: 900;
        font-size: 1.2rem;
        @media (min-width: 768px) {
          font-size: 1.5rem;
        }
      }
    }
    .ver-proyecto {
      color: black;
      font-size: 1rem;
      @media (min-width: 768px) {
        font-size: 1.2rem;
      }
    }
  }
`;
const PreviewProyectos = ({ proyecto }) => {
  //TODO: COMPLETEAR TODA LA INFORMACION DE LOS PROYECTOS DE ACUERDO CON EL FORMULARIO
  const { nombre, _id, cliente } = proyecto;
  return (
    <Div className=" card-container">
      <Link
        to={`/proyectos/mis-proyectos/proyecto/${_id}`}
        className="nombre-proyecto"
      >
        <div className="sub-container">
          <span className="nombre">{nombre}</span>
          <span className="cliente">{cliente}</span>
        </div>
        <span className="ver-proyecto">VER PROYECTO</span>
      </Link>
    </Div>
  );
};

export default PreviewProyectos;
