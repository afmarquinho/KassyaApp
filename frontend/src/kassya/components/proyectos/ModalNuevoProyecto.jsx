import { useContext, useEffect } from "react";
import ProyectosContext from "../../context/ProyectosProvider";
import useForm from "../../../auth/helpers/useForm";
import Alerta from "../../../auth/components/Alerta";
import Navbar from "../../layout/Navbar";
import styled from "@emotion/styled";
import { areValuesNotEmpty } from "../../helpers/areValuesNotEmpty";
import { isFutureDate } from "../../helpers/isFutureDate";

const ModalNuevoProyecto = () => {
  //*VARIABLES
  // ? PASO EL INNITIAL VALUES EL CONTEXT PARA SIMPLIFICAR EL COMPONENTE
  const {
    initialValues,
    proyectos,
    alerta,
    setAlerta,
    submitProyecto,
    modalNuevoProyecto,
    setModalNuevoProyecto,
  } = useContext(ProyectosContext);
  const { formValues, onInputChange, onReset } = useForm(initialValues);
  const TIPOPROYECTO = ["Estraégico", "Táctico", "Operativo"];
  const ALCANCE = ["Interno", "Local", "Regional", "Nacional"];

  const onSubmit = async (e) => {
    e.preventDefault();
    //*VALIDACIONES

    const notEmpty = areValuesNotEmpty(formValues); //* CAMPOS NO VACÍOS
    if (!notEmpty) {
      setAlerta({
        msg: "Debe diligenciar todos los campos",
        error: true,
      });
      return;
    }
    //TODO: VALIDAR QUE EL PRESUPUESTO NO SEA NEGATIVO
    const futureDate = isFutureDate(formValues.fechaEntrega); //* FECHA SEA FUTURA
    if (!futureDate) {
      setAlerta({
        msg: "Introduzca una fecha válida",
        error: true,
      });
      return;
    }
    formValues.nombre = formValues.nombre.trim().toUpperCase();
    formValues.descripcion = formValues.descripcion.trim();
    formValues.cliente = formValues.cliente.trim().toUpperCase();
    formValues.recursos = formValues.recursos.trim();
    formValues.ubicacion = formValues.ubicacion.trim();
    formValues.prioridad = formValues.prioridad.trim().toUpperCase();
    formValues.notaAdicional = formValues.notaAdicional.trim();

    setAlerta({
      msg: "¡Proyecto creado con éxito!",
      ok: true,
    });

    //TODO: ENVIAR TODOS LOS CAMPOS DEL PROYECTO Y MODIFICAR EL CHEMA DE PROYECTOS.
    const { nombre, descripcion, fechaEntrega, cliente } = formValues;
    // TODO: SE ELIMINA EL CONST DE ARRIBA Y SE PASA TODO EL FORMVALUES

    await submitProyecto({ nombre, descripcion, fechaEntrega, cliente });
    //?COMO ES UNA FUNCION ASYNC (EN EL PROVIDER), ESPERO QUE SE EJECUTE CON EXITO LA CONSULTA DE LA API Y RESETEO EL FOMULARIO
    setTimeout(() => {
      setAlerta({}), onReset(initialValues);
    }, 3000);
  };

  return (
    <>
      {modalNuevoProyecto && (
        <>
          <Navbar title="PROYECTOS" ruta="/proyectos" />
          <Overlay>
            <Content>
              <Form className="nuevo-proyecto" onSubmit={onSubmit}>
                <Titulo className="titulo">Nuevo Proyecto</Titulo>
                {alerta.msg && <Alerta mensajeAlerta={alerta} />}
                <div className="contenedor">
                  <div className="contenedor1">
                    <div className="input-group">
                      <label htmlFor="nombre">Nombre del Proyecto</label>
                      <input
                        type="text"
                        name="nombre"
                        value={formValues.nombre}
                        onChange={onInputChange}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="descripcion">Descripción</label>
                      <textarea
                        name="descripcion"
                        className="descripcion"
                        value={formValues.descripcion}
                        onChange={onInputChange}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="tipoCliente">Tipo Cliente</label>
                      <select
                        name="tipoCliente"
                        id=""
                        value={formValues.tipoCliente}
                        onChange={onInputChange}
                      >
                        <option value="">--Seleccione--</option>
                        <option value="interno">Interno</option>
                        <option value="externo">Externo</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label htmlFor="cliente">Nombre del Cliente</label>
                      <input
                        type="text"
                        name="cliente"
                        value={formValues.cliente}
                        onChange={onInputChange}
                      />
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
                    <div className="input-group">
                      <label htmlFor="presupuesto">
                        Presupuesto en dólares
                      </label>
                      <input
                        type="number"
                        name="presupuesto"
                        value={formValues.presupuesto}
                        onChange={onInputChange}
                      />
                    </div>
                  </div>
                  <div className="contenedor2">
                    <div className="input-group">
                      <label htmlFor="recursos">Recursos requeridos</label>
                      <input
                        type="text"
                        name="recursos"
                        value={formValues.recursos}
                        onChange={onInputChange}
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="ubicacion">Ubicación</label>
                      <input
                        type="text"
                        name="ubicacion"
                        value={formValues.ubicacion}
                        onChange={onInputChange}
                      />
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
                        <option value="alta">Alta</option>
                        <option value="media">Media</option>
                        <option value="baja">Baja</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label htmlFor="tipo">Tipo de Proyecto</label>
                      <select
                        name="tipo"
                        id=""
                        value={formValues.tipo}
                        onChange={onInputChange}
                      >
                        <option value="">--Seleccione--</option>
                        {TIPOPROYECTO.map((tipo) => (
                          <option key={tipo} value={tipo}>
                            {tipo}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="input-group">
                      <label htmlFor="alcance">Alcance</label>
                      <select
                        name="alcance"
                        id=""
                        value={formValues.alcance}
                        onChange={onInputChange}
                      >
                        <option value="">--Seleccione--</option>
                        {ALCANCE.map((tipo) => (
                          <option key={tipo} value={tipo}>
                            {tipo}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="input-group">
                      <label htmlFor="notaAdicional">Notas Adicionales</label>
                      <textarea
                        name="notaAdicional"
                        className="notaAdicional"
                        value={formValues.notaAdicional}
                        onChange={onInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="input-btn">
                  <button type="submit" className="btn-crear">
                    <p>CREAR</p>
                  </button>
                </div>

                <button
                  type="button"
                  className="btn-cancelar"
                  onClick={(e) => setModalNuevoProyecto(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                  </svg>
                  <p>Cancelar</p>
                </button>
              </Form>
            </Content>
          </Overlay>
        </>
      )}
    </>
  );
};

export default ModalNuevoProyecto;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    z-index: 100;
  }
`;
const Content = styled.div``;

const Titulo = styled.h2`
  margin: 0;
  color: #00bcd4;
  text-align: center;
  font-size: 2rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;
const Form = styled.form`
  position: rerlative;
  padding: 4rem;
  background: linear-gradient(to bottom, #08707e, #567271);
  border-radius: 2rem;
  max-height: 90vh;
  overflow-y: auto;
  margin-top: 5rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-top: 5rem;
    max-height: 100vh;
    padding: 2rem 4rem;
  }
  .contenedor {
    width: 300px;
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      width: 500px;
    }
  }
  .contenedor1,
  .contenedor2 {
    width: 100%;
    @media (min-width: 768px) {
      width: 50%;
    }
  }
  .input-group {
    display: flex;
    flex-direction: column;
    label {
      color: #d7f7f4;
      font-weight: 900;
      font-size: 1.5rem;
    }
    input,
    select,
    .descripcion,
    .notaAdicional {
      height: 3rem;
      border-radius: 0.5rem;
      border: none;
      font-size: 1.5rem;
      background-color: #f1eded;
      outline: none; /* Quita el contorno del botón al hacer clic */
    }
    .descripcion {
      resize: none;
      width: 100%;
      height: 12rem;
    }
    .notaAdicional {
      resize: none;
      width: 100%;
      height: 6rem;
    }
  }
  .input-btn {
    .btn-crear {
      background-color: #00bcd4;
      font-size: 1.2rem;
      color: #000000;
      height: 2.5rem;
      border: none;
      border-radius: 0.5rem;
      transition: all 0.3s ease-out;
      display: flex;
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem;
      :hover {
        cursor: pointer;
        transform: scale(1.1);
      }
      @media (min-width: 768px) {
        font-size: 1.5rem;
        width: 50%;
        height: 4rem;
        margin: 2rem auto;
      }
      P {
        margin: 0 auto;
      }
    }
  }

  .btn-cancelar {
    position: absolute;
    background-color: transparent;
    border: none;
    color: white;
    transition: all 0.3s ease-out;
    bottom: 1rem;
    right: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    @media (min-width: 768px) {
      bottom: 2rem;
      right: 2rem;
      font-size: 2rem;
    }

    :hover {
      cursor: pointer;
      transform: scale(1.1);
    }
    p {
      margin: 0;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;
