import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import ProyectosContext from "../../context/ProyectosProvider";
import useForm from "../../../auth/helpers/useForm";
import { useParams } from "react-router-dom";

const ModalEliminarTarea = () => {
  //*------------------>VARIABLES<----------------------------

  const { onModalEliminarTarea, modalEliminarTarea, tarea,  onEliminarTarea} =
    useContext(ProyectosContext);

  //*------------------>FUNCIONES<----------------------------
const onDelete = () => {
  onEliminarTarea(tarea)
};
  return (
    <>
      {modalEliminarTarea && (
        <Overlay>
          <Content>
            <Heading>
              <h2>Eliminar Tarea</h2>
              <button onClick={onModalEliminarTarea} className="cancelar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <button className="importante">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  height="30"
                  width="30"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </button>
            </Heading>
            {/* {alerta.msg && <Alerta mensajeAlerta={alerta} />} */}
            <p>
              Sí eliminas esta tarea, no podrás recuperarla, ¿deseas continuar?
            </p>
            <span>
              <button className="btn-cancelar"onClick={onModalEliminarTarea}>CANCELAR</button>
              <button className="btn-aceptar" onClick={onDelete}>
                ACEPTAR
              </button>
            </span>
          </Content>
        </Overlay>
      )}
    </>
  );
};

export default ModalEliminarTarea;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  position: relative;
  padding: 4rem;
  background: linear-gradient(45deg, #ffffff, #ffffff);
  border-radius: 10px;
  width: 40rem;
  p {
    margin: 0;
    line-height: 1.5rem;
    font-size: 1.3rem;
  }
  span {
    padding: 2rem 0 0 0;
    display: flex;
    justify-content: space-around;
    .btn-aceptar {
      background-color: teal;
      border: none;
      color: white;
      width: 15rem;
      height: 4rem;
      border-radius: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      :hover {
        transform: scale(1.1);
      }
    }
    .btn-cancelar {
      background-color: crimson;
      border: none;
      color: white;
      width: 15rem;
      height: 4rem;
      border-radius: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      :hover {
        transform: scale(1.1);
      }
    }
  }
`;
const Heading = styled.div`
  color: #000000;
  h2 {
    margin: 0;
    font-size: 2rem;
    text-align: start;
    padding-left: 3rem;
  }
  button {
    padding: 0.5rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
    transition: all 0.3s ease;
    background: none;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    :hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  .cancelar {
    position: absolute;
    width: 3rem;
    top: 2rem;
    right: 3rem;
  }
  .importante {
    position: absolute;
    width: 3rem;
    top: 2.4em;
    left: 2rem;
  }
`;
