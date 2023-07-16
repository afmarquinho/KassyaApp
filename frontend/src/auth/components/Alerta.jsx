import styled from "@emotion/styled";
const Div = styled.div`
  margin: 0;
  .warning {
    margin: 0;
    color: #b71c1c;
    font-size: 1.3rem;
  }
  .alerta-exitosa {
    margin: 0;
    background-color: #2196f3;
    font-size: 1.4rem;
    color: white;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    text-align: center;
    padding: 0 1rem 0 1rem;
  }
  .error {
    margin: 0;
    background-color: red;
  }
`;

const Alerta = ({ mensajeAlerta }) => {
  return (
    <Div>
      <p
        className={`${
          mensajeAlerta.warning
            ? "warning"
            : mensajeAlerta.ok
            ? "alerta-exitosa"
            : "error"
        }`}
      >
        {mensajeAlerta.msg}
      </p>
    </Div>
  );
};

export default Alerta;
