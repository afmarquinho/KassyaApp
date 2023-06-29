import styled from "@emotion/styled";

export const Contenedor = styled.div`
  position: static;
  width: 100vw;
  background-color: #455a64;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15rem;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
  }
  .subcontenedor {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;

    .sidebarelement {
      margin: 0;
      color: white;
      width: 100%;
      text-align: center;
      transition: 0.4s all ease;
      position: relative;
      z-index: 100;

      @media (min-width: 768px) {
        text-align: left;
        width: 15rem;
        height: 4rem;
        line-height: 4rem;
        padding-left: 1rem;
      }
    }
    .btn-navegacion {
      @media (min-width: 768px) {
        ::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width:0;
          height:100%;
          transition: all 0.5s ease;
          -webkit-transition: all 0.5s ease;
          z-index: -1;
        }
        :hover::after{ width: 100%; }
      }
    }

    .modulo {
      background-color: #e1f5fe;
      color: black;
      width: 100%;
      text-align: center;
      padding: 0;
    }
    .usuario {
      background-color: #4fc3f7;
      color: black;
      width: 100%;
      text-align: center;
      padding: 0;
    }
    .btn-clientes,
    .btn-inventario,
    .btn-marketing,
    .btn-proyectos,
    .btn-servcliente {
      background-color: #546e7a;
    }
    .btn-datos { border-left: 10px solid #f44336; }
    .btn-datos::after{ background-color:  #f44336 }
    .btn-clientes { border-left: 10px solid #e91e63;}
    .btn-clientes::after { background-color: #e91e63;}
    .btn-compras { border-left: 10px solid #9c27b0; }
    .btn-compras::after { background-color: #9c27b0; }
    .btn-inventario { border-left: 10px solid #673ab7; }
    .btn-inventario::after { background-color: #673ab7; }
    .btn-logistica { border-left: 10px solid #3f51b5; }
    .btn-logistica::after { background-color: #3f51b5; }
    .btn-marketing { border-left: 10px solid #2196f3; }
    .btn-marketing::after { background-color: #2196f3; }
    .btn-proveedores { border-left: 10px solid #03a9f4; }
    .btn-proveedores::after { background-color: #03a9f4; }
    .btn-proyectos { border-left: 10px solid #00bcd4; }
    .btn-proyectos::after { background-color: #00bcd4; }
    .btn-RRHH { border-left: 10px solid #ffc107; }
    .btn-RRHH::after { background-color: #ffc107; }
    .btn-servcliente { border-left: 10px solid #ff9800; }
    .btn-servcliente::after { background-color: #ff9800; }
    .btn-ventas { border-left: 10px solid #ff5722; }
    .btn-ventas::after { background-color: #ff5722; }
  }

  .btn-logout {
    background-color: #4fc3f7;
    font-size: 1.3rem;
    margin: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s all ease;
    color: black;
    border:none;


    @media (min-width: 768px) {
      height: 4rem;
      width: 15rem;
      align-items: center;
      position: fixed;
      bottom: 0;
      cursor: pointer;
    }
    :hover { background-color: #00e676; }
  }
`;