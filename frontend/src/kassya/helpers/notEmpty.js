//? FUNCION PARA VALIDAR QUE NO HAYAS CAMPOS VACÍOS EN UN OBJETO
export function areValuesNotEmpty(formValues) {
    return Object.values(formValues).every(
      (value) => value !== "" && value !== null && value !== undefined
    );
  }