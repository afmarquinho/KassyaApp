import styled from "@emotion/styled";

export const Contenedor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 3rem;
  height: 4rem;
  background-color: #3f51b5;
  background-color: #455a64;
  padding-right: 3rem;
  width: calc(100% - 15rem);
  position: fixed;
  right:0;
  top:0;
  z-index: 100;
  @media (max-width: 768px) {
    display: none;
  }

  .kassya-name {
    margin: 0;
    font-size: 1.3rem;
    color: #00bcd4;
    font-weight: bold;
  }
  .cliente-name {
    margin: 0;
    font-size: 2rem;
    font-weight: normal;
    font-size: 1.3rem;
    color: white;
  }

  
`;