import styled from "@emotion/styled";
import Sidebar from "../components/Sidebar";

const Main = styled.main`
  @media (min-width: 768px) {
    margin: 5rem 0 0 16rem;
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
  width: calc(100% - 15rem);
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  @media (max-width: 768px) {
    display: none;
  }
  .titulo-modulo {
    width: 60%;
    margin: 0;
    padding: 1rem;
    color: white;
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
    }
    .cliente-name {
      margin: 0;
      font-size: 2rem;
      font-weight: normal;
      font-size: 1.5rem;
      color: white;
    }
  }
`;

const KassyaLayout = ({ children, title = "" }) => {
  return (
    <>
      <Sidebar />
      <Contenedor className="navBar-container">
        <h4 className="titulo-modulo">{title}</h4>
        <div className="sub-contenedor">
          <h1 className="kassya-name">Kassya</h1>
          <h2 className="cliente-name">Tu Empresa</h2>
        </div>
      </Contenedor>
      <Main>{children}</Main>
    </>
  );
};

export default KassyaLayout;
