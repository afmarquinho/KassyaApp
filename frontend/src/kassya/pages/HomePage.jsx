import styled from "@emotion/styled";
import KassyaLayout from "../layout/KassyaLayout";
const Contenedor = styled.div`
  display: flex;
  padding-top: 4rem;
  @media (min-width: 768px) {
    background-color: #bbdefb;
    height: calc(100vh - 6rem);
    width: calc(100vw - 17rem);
    padding: 0;
  }

  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => {
  return (
    <>
      <KassyaLayout title="">
        <Contenedor>
          <span className="loader"></span>
        </Contenedor>
      </KassyaLayout>
    </>
  );
};

export default HomePage;
