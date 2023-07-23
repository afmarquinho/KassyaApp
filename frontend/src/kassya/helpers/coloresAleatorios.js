export function elegirColorAleatorio(arrayDeColores) {
  // Generar un número aleatorio entre 0 y la longitud del array - 1
  const indiceAleatorio = Math.floor(Math.random() * arrayDeColores.length);

  // Devolver el color correspondiente al índice aleatorio
  return arrayDeColores[indiceAleatorio];
}
