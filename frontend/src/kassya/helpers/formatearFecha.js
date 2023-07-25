export const formatearFecha = (fecha) => {
  //TODO: REVISAR EL FORMATO DE LA FECHA EN EL NAVEGADOR, QUITAR EL DIA
  const nuevaFecha = new Date(fecha.split("T")[0].split("-"));
  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return nuevaFecha.toLocaleDateString("es-ES", opciones);
};
