import styled from "@emotion/styled";

export const Titulo = styled.h2`
  margin: 0;
  color: #00bcd4;
  text-align: center;
  font-size: 2rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;
export const Form = styled.form`
  position: rerlative;
  margin: 0;
  /* background-color: rgb(0, 188, 212); */
  padding: 2rem;
  .contenedor {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
    }
  }
  .contenedor1,
  .contenedor2 {
    width: 100%;
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

  .btn-crear {
    background-color: #00bcd4;
    font-size: 1.2rem;
    color: #000000;
    width: 30%;
    height: 2.5rem;
    border: none;
    margin-top: 1rem;
    margin: 0 auto;
    border-radius: 0.5rem;
    transition: all 0.3s ease-out;

    :hover {
      cursor: pointer;
      transform: scale(1.1);
    }
    @media (min-width: 768px) {
      font-size: 1.5rem;
      width: 25%;
      height: 4rem;
    }
  }

  .input-btn {
    display: flex;
    width: 100;
    margin-top: 2rem;
  }
  .btn-cancelar{
    position:absolute;
    background-color: transparent;
    border: none;
    color: white;
    transition: all 0.3s ease-out;
    bottom: 1rem;
    right:1rem;
    text-align: center;
    display: flex;
    align-items: center;

    :hover{
      cursor: pointer;
      transform: scale(1.1);
    }
    p{
      margin:0;
      @media (max-width: 768px ) {
        display: none;
      }
    }
  }
`;
