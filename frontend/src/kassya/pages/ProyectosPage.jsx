import { Link } from "react-router-dom";
import KassyaLayout from "../layout/KassyaLayout";
import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import ProyectosContext from "../context/ProyectosProvider";
import ModalNuevoProyecto from "../components/proyectos/ModalNuevoProyecto";

const ProyectosPage = () => {
  //TODO:Estado del proyecto: "En progreso", "Completado", "En espera", "Cancelado", etc.
  const { modalNuevoProyecto, setModalNuevoProyecto, setAlerta } =
    useContext(ProyectosContext);
  useEffect(() => {
    setModalNuevoProyecto(false);
  }, []);
  const llamarModal = () => {
    setModalNuevoProyecto(true);
    setAlerta({});
  };
  return (
    <>
      <KassyaLayout title="PROYECTOS">
        <>
          <Div className="botones">
            <Link
              onClick={llamarModal}
              className="btn-proyecto btn-nuevoProyecto"
            >
              <svg
                enable-background="new 0 0 128 128"
                id="Слой_1"
                version="1.1"
                height="60"
                width="60"
                viewBox="0 0 128 128"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <path
                    d="M6,104H2c0,9.4,7.6,17,17,17h107V17H21V2h-2C9.6,2,2,9.6,2,19v85L6,104c0-7.2,5.8-13,13-13h2V21h101v96H19   C11.8,117,6,111.2,6,104z M17,87.1c-4.4,0.5-8.3,2.7-11,5.9V19c0-6.5,4.8-11.9,11-12.8V87.1z"
                    fill="#3EBBC4"
                    // stroke="#3EBBC4"
                    // stroke-width="3"
                  />
                  <path
                    d="M103,29H91v67.5l6,12l6-12V29z M99,33v11h-4V33H99z M97,99.5l-2-4V48h4v47.5L97,99.5z"
                    fill="#3EBBC4"
                    // stroke="#3EBBC4"
                    // stroke-width="3"
                  />
                  <path
                    d="M42,77v4h8L45,108.7l3.9,0.7L54,81H66l5.1,28.4l3.9-0.7L70,81h8v-4h-8.7L67,63.8c3.1-2.2,5-5.9,5-9.8   c0-5.9-4.3-10.9-10-11.8V29h-4v13.2c-5.7,1-10,5.9-10,11.8c0,3.9,1.9,7.5,5,9.8L50.7,77H42z M56.2,61c-2.6-1.4-4.2-4.1-4.2-7   c0-4.4,3.6-8,8-8s8,3.6,8,8c0,2.9-1.6,5.6-4.2,7l-1.3,0.7L65.3,77H54.7l2.7-15.3L56.2,61z"
                    fill="#3EBBC4"
                    // stroke="#3EBBC4"
                    // stroke-width="3"
                  />
                </g>
              </svg>
              <p>Nuevo Proyecto</p>
            </Link>
            <Link
              to="/proyectos/mis-proyectos"
              className="btn-proyecto btn-misProyectos"
            >
              <svg
                enable-background="new 0 0 128 128"
                id="Слой_1"
                version="1.1"
                height="60"
                width="60"
                viewBox="0 0 128 128"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <path
                    d="M6,104H2c0,9.4,7.6,17,17,17h107V17H21l0-15h-2C9.6,2,2,9.6,2,19v85L6,104c0-7.2,5.8-13,13-13h2l0-70h101   v96H19C11.8,117,6,111.2,6,104z M17,46.5c0,17.5,0,35,0,40.6c-4.4,0.5-8.3,2.7-11,5.9V19c0-6.5,4.8-11.9,11-12.8V46.5z"
                    fill="#3e47c4"
                  />
                  <path
                    d="M27,2v10h87.4l11.7-5l-11.7-5H27z M31,6h6v2h-6V6z M113.6,8H41V6h72.6l2.3,1L113.6,8z"
                    fill="#3e47c4"
                  />
                  <polygon
                    fill="#3e47c4"
                    points="46.5,72.5 46.5,102 95.5,102 95.5,72.5 91.5,72.5 91.5,98 50.5,98 50.5,72.5  "
                  />
                  <polygon
                    fill="#3e47c4"
                    points="84,43 84,50.2 71,37.2 39.6,68.6 42.4,71.4 71,42.8 88,59.8 88,47 91.5,47 91.5,63.3 99.6,71.4    102.4,68.6 95.5,61.7 95.5,43  "
                  />
                </g>
              </svg>
              <p>Mis Proyectos</p>
            </Link>
            <Link to="/proyectos" className="btn-proyecto btn-informes">
              <svg
                id="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="70"
                width="70"
                viewBox="0 0 512 512"
              >
                <title>analytics report</title>
                <path
                  d="M244.23,64.91a5.62,5.62,0,0,0,2.29-.49l53.11-24,8.26,18.3a5.58,5.58,0,0,0,10.18-4.59L307.51,30.76A5.58,5.58,0,0,0,300.12,28L241.93,54.24a5.58,5.58,0,0,0,2.3,10.67Z"
                  fill="#64226d"
                />
                <path
                  d="M428.61,411.69A5.59,5.59,0,0,0,433.7,415a5.47,5.47,0,0,0,2.29-.5L468.08,400a5.58,5.58,0,0,0,2.79-7.38l-33.6-74.43a5.59,5.59,0,0,0-10.18,4.6l31.31,69.33-27,12.19A5.59,5.59,0,0,0,428.61,411.69Z"
                  fill="#64226d"
                />
                <path
                  d="M53.6,151.51,103.48,129a5.58,5.58,0,1,0-4.59-10.17l-55,24.82A5.56,5.56,0,0,0,41.13,151l59.46,131.71a5.58,5.58,0,0,0,10.18-4.59Z"
                  fill="#64226d"
                />
                <path d="M416.44,478.94v-397a5.58,5.58,0,0,0-5.58-5.59H129.76a5.58,5.58,0,0,0-5.58,5.59v397a5.58,5.58,0,0,0,5.58,5.59h281.1A5.58,5.58,0,0,0,416.44,478.94Zm-11.16-5.58H135.34V87.51H405.28Z" />
                <path
                  d="M268.16,292.71A77.82,77.82,0,0,0,345.89,215a5.58,5.58,0,0,0-5.58-5.58H273.74V142.82a5.58,5.58,0,0,0-5.58-5.58,77.74,77.74,0,1,0,0,155.47Zm-5.59-144.07V215a5.59,5.59,0,0,0,5.59,5.59H334.5a66.57,66.57,0,1,1-71.93-71.92Z"
                  fill="#64226d"
                />
                <path
                  d="M292.64,195.89h72.15a5.58,5.58,0,0,0,5.59-5.58,77.83,77.83,0,0,0-77.74-77.74,5.58,5.58,0,0,0-5.58,5.58v72.16A5.58,5.58,0,0,0,292.64,195.89ZM298.22,124A66.68,66.68,0,0,1,359,184.72H298.22Z"
                  fill="#64226d"
                />
                <path
                  d="M196,351.91H340.31a5.58,5.58,0,1,0,0-11.16H196a5.58,5.58,0,0,0,0,11.16Z"
                  fill="#64226d"
                />
                <path
                  d="M340.31,376.44H320.64a5.59,5.59,0,0,0,0,11.17h19.67a5.59,5.59,0,0,0,0-11.17Z"
                  fill="#64226d"
                />
                <path
                  d="M196,387.61h84.88a5.59,5.59,0,0,0,0-11.17H196a5.59,5.59,0,0,0,0,11.17Z"
                  fill="#64226d"
                />
                <path
                  d="M340.31,412.14H268.16a5.58,5.58,0,1,0,0,11.16h72.15a5.58,5.58,0,0,0,0-11.16Z"
                  fill="#64226d"
                />
                <path
                  d="M196,423.3h31.87a5.58,5.58,0,0,0,0-11.16H196a5.58,5.58,0,1,0,0,11.16Z"
                  fill="#64226d"
                />
              </svg>
              <p>Informe</p>
            </Link>
          </Div>
          <ModalNuevoProyecto />
        </>
      </KassyaLayout>
    </>
  );
};

export default ProyectosPage;

const Div = styled.div`
  width: 90%;
  margin: 2rem auto 0 auto;
  display: flex;
  gap: 2rem;
  @media (min-width: 768px) {
    margin: 6rem 0 0 2rem;
  }

  p {
    margin: 0;
  }
  .btn-proyecto {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    width: 10rem;
    height: 10rem;
    @media (max-width: 768px) {
      svg {
        display: none;
      }
    }

    @media (min-width: 768px) {
      padding: 1rem;
      width: 15rem;
      height: 15rem;
    }
    border-radius: 1rem;
    color: #ffffff; /* Texto en color blanco */
    font-size: 1.2rem;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Sombra de texto */
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2); /* Sombra del botón */
    cursor: pointer;
    /* Efecto de alto relieve */
    position: relative;
    transition: all 0.3s ease-in-out;
    /* Pseudo-elemento para el efecto de relieve */
    ::after {
      content: "";
      position: absolute;
      top: -5px; /* Ajusta la posición del relieve */
      left: -5px; /* Ajusta la posición del relieve */
      right: -5px; /* Ajusta la posición del relieve */
      bottom: -5px; /* Ajusta la posición del relieve */
      border-radius: 15px; /* Levemente redondeado, igual que el botón */
      box-shadow: inset 0px 3px 8px rgba(0, 0, 0, 0.2); /* Efecto de relieve */
    }
    :hover {
      transform: scale(0.9);
    }
  }
  .btn-nuevoProyecto {
    background: linear-gradient(45deg, #9c27b0, #673ab7);
  }
  .btn-misProyectos {
    background: linear-gradient(45deg, #ff9800, #ff5722);
  }
  .btn-informes {
    /* background: linear-gradient(45deg, #64B5F6, #26A69A); */
    background: linear-gradient(45deg, #ffd700, #ffa500);
    /* background: linear-gradient(45deg, #FF0000, #FF6347); */
    /* background: linear-gradient(45deg, #8A2BE2, #9400D3); */
    /* background: linear-gradient(45deg, #DC143C, #B22222); */
    /* background: linear-gradient(45deg, #40E0D0, #20B2AA); */
    /* background: linear-gradient(45deg, #21c1cc, #00868b); */
    /* background: linear-gradient(45deg, #FF00FF, #FF1493); */
  }
`;
