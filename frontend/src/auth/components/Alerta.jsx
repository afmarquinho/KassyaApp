import styled from "@emotion/styled";
const Div = styled.div`
  margin: 0;
  .warning {
    margin: 0;
    color: #b71c1c;
    font-size: 1.3rem;
  }
  .error {
    margin: 0;
    background-color: red;
  }
`;

const Alerta = ({ mensajeAlerta }) => {
  return (
    <Div>
      <p className={`${mensajeAlerta.warning ? "warning" : "error"}`}>
        {mensajeAlerta.msg}
      </p>
    </Div>
  );
};

export default Alerta;
