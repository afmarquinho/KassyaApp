import styled from "@emotion/styled";
import { useContext, useEffect, useState } from "react";
import ProyectosContext from "../../context/ProyectosProvider";
import useForm from "../../../auth/helpers/useForm";
import { useParams } from "react-router-dom";

const ModalEditarTarea = ({ titulo = "Editar Tarea" }) => {
  //*------------------>VARIABLES<----------------------------
  const PRIORIDAD = ["Baja", "Medio", "Alta"];
  const param = useParams();

  const {
    modalEditarTarea,
    setModalEditarTarea,
    tarea,
    setTarea,
    initialValues,
    onEditarTarea,
  } = useContext(ProyectosContext);

  const values = {
    nombre: tarea.nombre,
    descripcion: tarea.descripcion,
    fechaEntrega: tarea.fechaEntrega,
    prioridad: tarea.prioridad,
  };

  const { formValues, onInputChange, onReset } = useForm(values);

  //*------------------>FUNCIONES<----------------------------

  const cerrarModal = () => {
    setModalEditarTarea(false);
    setTarea({})
  };
  useEffect(() => {
    console.log(formValues);
  }, [tarea]);
  return (
    <>
      {modalEditarTarea && (
        <Overlay>
          <Content>
            <Heading>
              <h2>{titulo}</h2>
              <button onClick={cerrarModal}>
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
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </Heading>
            {/* {alerta.msg && <Alerta mensajeAlerta={alerta} />} */}
            <Form>
              <div className="input-group">
                <label htmlFor="nombre">Nombre de la tarea</label>
                <input
                  type="text"
                  name="nombre"
                  value={formValues.nombre}
                  onChange={onInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="descripcion">Descripcion</label>
                <textarea
                  name="descripcion"
                  id=""
                  rows="4"
                  value={formValues.descripcion}
                  onChange={onInputChange}
                ></textarea>
              </div>
              <div className="input-group">
                <label htmlFor="prioridad">Prioridad</label>
                <select
                  name="prioridad"
                  id=""
                  value={formValues.prioridad}
                  onChange={onInputChange}
                >
                  <option value="">--Seleccione--</option>
                  {PRIORIDAD.map((prioridad) => (
                    <option key={prioridad} value={prioridad}>
                      {prioridad}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="fechaEntrega">Fecha de Entrega</label>
                <input
                  type="date"
                  name="fechaEntrega"
                  value={formValues.fechaEntrega}
                  onChange={onInputChange}
                />
              </div>
              <div className="input-group ">
                <input type="submit" value="crear" className="btn-submit" />
              </div>
            </Form>
          </Content>
        </Overlay>
      )}
    </>
  );
};

export default ModalEditarTarea;

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
  background: linear-gradient(45deg, #ffd700, #ffa500);
  border-radius: 10px;
  width: 40rem;
`;
const Heading = styled.div`
  color: #000000;
  h2 {
    margin: 0;
    font-size: 2rem;
    text-align: start;
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
`;
const Form = styled.form`
  .input-group {
    margin: 0;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    label {
      font-size: 1.3rem;
      font-weight: bold;
    }
    input,
    textarea,
    select {
      outline: none;
      resize: none;
      border-radius: 0.3rem;
      border: none;
    }
    input,
    select {
      height: 3rem;
    }
    .btn-submit {
      margin-top: 1rem;
      background-color: #7870f1;
      color: white;
      font-weight: bold;
      transition: all 0.4s ease;
      cursor: pointer;
      :hover {
        background-color: #574ed8;
      }
    }
  }
`;
