import styled from "@emotion/styled";
const Titulo = styled.h2`
  margin: 0;
  color: white;
  text-align: center;
`;
const Form = styled.form`
  margin: 0;
  /* background-color: rgb(0, 188, 212); */
  padding: 2rem;
  .contenedor {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
  .contenedor1,
  .contenedor2 {
    width: 100%;
  }
  .input-group {
    display: flex;
    flex-direction: column;
    label {
      color: #eef7d7;
      font-weight: 900;
      font-size: 1.5rem;
    }
    input,
    select,
    .descripcion {
      height: 3rem;
      border-radius: 0.5rem;
      border: none;
      font-size: 1.5rem;
      background-color: #f1eded;
    }
    .descripcion {
      height: 100px;
    }
  }
  .btn-crear {
    background-color: #74b3ee;
    color: white;
    font-weight:900;
    width: 50%;
    height: 4rem;
    border-radius: 0.5rem;
    border: none;
    margin-top: 1rem;
    transition: all 0.5s ease-out;
    margin: 0 auto;
    :hover{
      background-color:#1e8ef7;
      cursor:pointer;
    }
  }
  .input-btn{    
    display: flex;
    width: 100;  
    margin-top: 2rem;  
  }
`;

const NuevoProyecto = () => {
  return (
    <>
      <Form className="nuevo-proyecto">
        <Titulo className="titulo">Nuevo Proyecto</Titulo>
        <div className="contenedor">
          <div className="contenedor1">
            <div className="input-group">
              <label htmlFor="nombre">Nombre del Proyecto</label>
              <input type="text" name="nombre" />
            </div>
            <div className="input-group">
              <label htmlFor="descripcion">Descripción</label>
              {/* //TODO: BLOQUEDAR EL TEXTAREA */}
              <textarea name="descripcion" className="descripcion" rows="4" />
            </div>
            <div className="input-group">
              <label htmlFor="cliente">Cliente</label>
              <select name="cliente" id="">
                <option value="">--Seleccione--</option>
                <option value="interno">Interno</option>
                <option value="externo">Externo</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="nombreCliente">¿Cuál?</label>
              <input type="text" name="nombreCliente" />
            </div>
            <div className="input-group">
              <label htmlFor="fechaEntrega">Fecha de Entrega</label>
              <input type="date" name="fechaEntrega" />
            </div>
            <div className="input-group">
              <label htmlFor="presupuesto">Presupuesto en dólares</label>
              <input type="number" name="prsupuesto" />
            </div>
          </div>
          <div className="contenedor2">
            <div className="input-group">
              <label htmlFor="recursos">Recursos asignados o requeridos</label>
              <input type="text" name="recursos" />
            </div>
            <div className="input-group">
              <label htmlFor="ubicacion">Ubicación</label>
              <input type="text" name="ubicacion" />
            </div>
            <div className="input-group">
              <label htmlFor="prioridad">Prioridad</label>
              <select name="prioridadd" id="">
                <option value="">--Seleccione--</option>
                <option value="alta">Alta</option>
                <option value="media">Media</option>
                <option value="baja">Baja</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="tipo">Tipo de Proyecto</label>
              <select name="tipo" id="">
                <option value="">--Seleccione--</option>
                <option value="ecommerce">E-commerce</option>
                <option value="infraestructura">Infraestructura</option>
                <option value="i+d">Investigación y Desarrollo (I+D)</option>
                <option value="gestionHumana">Gestión Humana</option>
                <option value="eventos">Eventos</option>
                <option value="sostenibilidad">
                  Sostenibilidad y Medio Ambiente
                </option>
                <option value="gestionCambios">Gestión de Cambios</option>
                <option value="mercadeo">Mercadeo</option>
                <option value="procesos">Optimización de Procesos</option>
                <option value="analisisDatos">Análisis de Datos</option>
                <option value="innovacion">Innovación de Productos</option>
                <option value="responsabilidadSocial">
                  Responsabilidad Social Empresarial (RSE)
                </option>
                <option value="gestionRiesgos">Gestión de Riesgos</option>
                <option value="fusiones">Fusiones y Adquisiciones</option>
                <option value="otro">Otro</option>
              </select>
                {/* //TODO: HABILITAR OESCRIBIR OTRO CUANDO SE SELECCIONE OTRO */}
            </div>
            <div className="input-group">
              <label htmlFor="otroTipo">¿Cuál?</label>
              <input type="text" name="otroTipo" />
            </div>
            <div className="input-group">
              <label htmlFor="alcance">Alacance</label>
              <select name="alcance" id="">
                <option value="">--Seleccione--</option>
                <option value="local">Local</option>
                <option value="regional">Regional</option>
                <option value="nacional">Nacional</option>
              </select>
            </div>
          </div>
        </div>
        <div className="input-btn">
          <input type="submit" value="CREAR" className="btn-crear" />
        </div>
      </Form>
    </>
  );
};

export default NuevoProyecto;
