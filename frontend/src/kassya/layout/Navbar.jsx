import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const P = styled.p`
  background-color: #4fc3f7;
  text-align: center;
  line-height: 4rem;
  font-size: 1.2rem;
  margin: 0;
  height: 4rem;
  width: 12rem;
  @media (min-width: 768px) {
    width: 15rem;
    font-size: 1.4rem;
  }
`;

const Main = styled.main`
  @media (min-width: 768px) {
    /* margin: 5rem 0 0 16rem; */
  }
`;
const Contenedor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  background-color: #3f51b5;
  background-color: #455a64;
  padding-right: 3rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  width: calc(100% - 12rem);
  @media (min-width: 768px) {
    width: calc(100% - 15rem);
  }
  .titulo-modulo {
    width: 60%;
    margin: 0;
    padding: 1rem;
    color: white;
    font-size: 1.2rem;
    @media (min-width: 768px) {
        font-size:1.6rem;
    }
  }
  .sub-contenedor {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    gap: 3rem;

    .kassya-name {
      margin: 0;
      font-size: 1.5rem;
      color: #00bcd4;
      font-weight: bold;
      @media (max-width: 768px) {
        display: none;
      }
    }
    .cliente-name {
      margin: 0;
      font-size: 2rem;
      font-weight: normal;
      font-size: 1.5rem;
      color: white;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  .home {
    color: white;
    display: flex;
    align-items: center;
    font-style: italic;
    p {
      margin: 0;
    }
  }
`;
const Navbar = ({ children, title = "", ruta="/"}) => {
  return (
    <>
      <Contenedor className="navBar-container">
        <h4 className="titulo-modulo">{title}</h4>
        <div className="sub-contenedor">
          <h1 className="kassya-name">Kassya</h1>
          <h2 className="cliente-name">Tu Empresa</h2>
          <Link className="home" to={ruta}>
            <p>Home</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25"
              viewBox="0 -960 960 960"
              width="25"
            >
              <path
                d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </Contenedor>
      <P>NOMBRE</P>
      <Main>{children}</Main>
    </>
  );
};

export default Navbar;
