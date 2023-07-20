import styled from "@emotion/styled";

export const Contenedor = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 1;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    background-color: #01579b;
    opacity: 0.9;
    z-index: -1;
  }
  .logo-name {
    position: absolute;
    top: 0;
    left: 0;
    font-weight: bold;
    margin: 0;
    font-size: 7rem;

    @media (min-width: 768px) {
      font-size: 9rem;
    }
  }

  .form {
    background-color: #00bcd4;
    padding: 2.5rem;
    border-radius: 0.5rem;
    width: 80%;

    @media (min-width: 768px) {
      width: 40rem;
    }

    .login-title {
      color: white;
      margin: 0;
      text-align: center;
      font-size: 2.5rem;
    }
    .input-group {
      width: 100%;
      .label {
        display: none;
      }
      .user,
      .password,
      .email {
        width: 100%;
        height: 4rem;
        border-radius: 0.5rem;
        border: none;
        text-align: center;
      }
      .password,
      .email {
        margin-top: 1.5rem;
      }
    }
    .btn-submit,
    .submit-register,
    .btn-google {
      width: 100%;
      height: 4rem;
      border-radius: 0.5rem;
      border: none;
      text-align: center;
      margin-top: 1.5rem;
      background-color: #18ffff;
      transition: 0.3s all ease-in;
      display: flex;
      align-items: center;
      justify-content: center;

      :hover {
        cursor: pointer;
        background-color: #006064;
        font-weight: 900;
        color: white;
      }
      p {
        margin: 0 0 0 1rem;
      }
    }
    .btn-google {
      background-color: #eceff1;
      :hover {
        background-color: #5d4037;
      }
    }

    .ya-tienes-cuenta,
    .restablecer {
      margin: 0;
      width: 100%;
      text-align: right;
    }
    .nota-recuperacion {
      line-height: 1.5rem;
      font-size: 1.4rem;
      margin: 1.5rem 0 0 0;
    }
    .confirmacion {
      span {
        font-weight: bold;
        color: black;
        font-size: 1.8rem;
      }
    }
    .btn-confirmacion {
      margin: 1.5rem 0;
      width: 100%;
      background-color: transparent;
      border: none;
      :hover {
        cursor: pointer;
      }
    }
  }
`;
