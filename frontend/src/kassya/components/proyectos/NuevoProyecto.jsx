import { useContext } from "react";
import { Form, Titulo } from "./styles/nuevoProyecto.styles";
import ProyectosContext from "../../context/ProyectosProvider";
import useForm from "../../../auth/helpers/useForm";
import Alerta from "../../../auth/components/Alerta";
import { areValuesNotEmpty, isFutureDate } from "../../helpers";

const NuevoProyecto = () => {
  //*VARIABLES
  // ? PASO EL INNITIAL VALUES EL CONTEXT PARA SIMPLIFICAR EL COMPONENTE
  const { initialValues, proyectos, alerta, setAlerta, submitProyecto } =
    useContext(ProyectosContext);
  const { formValues, onInputChange, onReset } = useForm(initialValues);

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
    formValues.otroTipo = formValues.otroTipo.trim();
    formValues.notaAdicional = formValues.notaAdicional.trim();

    setAlerta({
      msg: "¡Proyecto creado con éxito!",
      ok: true,
    });
    
    //TODO: ENVIAR TODOS LOS CAMPOS DEL PROYECTO Y MODIFICAR EL CHEMA DE PROYECTOS.
    const {nombre, descripcion, fechaEntrega, cliente} = formValues
    // TODO: SE ELIMINA EL CONST DE ARRIBA Y SE PASA TODO EL FORMVALUES
   
    await submitProyecto({ nombre, descripcion, fechaEntrega, cliente});
     //?COMO ES UNA FUNCION ASYNC (EN EL PROVIDER), ESPERO QUE SE EJECUTE CON EXITO LA CONSULTA DE LA API Y RESETEO EL FOMULARIO
    setTimeout(() => {
      setAlerta({}), onReset(initialValues);
    }, 5000)
    
  };

  return (
    <>
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
              <label htmlFor="presupuesto">Presupuesto en dólares</label>
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
                <option value="analisisDatos">Análisis de Datos</option>
                <option value="ecommerce">E-commerce</option>
                <option value="eventos">Eventos</option>
                <option value="fusiones">Fusiones y Adquisiciones</option>
                <option value="gestionCambios">Gestión de Cambios</option>
                <option value="gestionRiesgos">Gestión de Riesgos</option>
                <option value="gestionHumana">Gestión Humana</option>
                <option value="infraestructura">Infraestructura</option>
                <option value="innovacion">Innovación de Productos</option>
                <option value="i+d">Investigación y Desarrollo (I+D)</option>
                <option value="mercadeo">Mercadeo</option>
                <option value="procesos">Optimización de Procesos</option>
                <option value="responsabilidadSocial">
                  Responsabilidad Social Empresarial (RSE)
                </option>
                <option value="sostenibilidad">
                  Sostenibilidad y Medio Ambiente
                </option>
                <option value="otro">Otro</option>
              </select>
              {/* //TODO: HABILITAR OESCRIBIR OTRO CUANDO SE SELECCIONE OTRO */}
            </div>
            <div className="input-group">
              <label htmlFor="otroTipo">¿Cuál?</label>
              <input
                type="text"
                name="otroTipo"
                value={formValues.otroTipo}
                onChange={onInputChange}
              />
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
                <option value="local">Local</option>
                <option value="regional">Regional</option>
                <option value="nacional">Nacional</option>
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
          <input type="submit" value="CREAR" className="btn-crear" />
        </div>
        <button className="btn-cancelar">
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
    </>
  );
};

export default NuevoProyecto;
