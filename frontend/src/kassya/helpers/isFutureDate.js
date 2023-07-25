//? FUNCION PARA VALIDAR QUE UNA FECHA NO SEA PASADO NI PRESENTE, SOLO FUTURA

export function isFutureDate(date) {
    const currentDate = new Date();
    const inputDate = new Date(date);
  
    // Comparamos las fechas en milisegundos para verificar si es futura
    return inputDate.getTime() > currentDate.getTime();
  }
  