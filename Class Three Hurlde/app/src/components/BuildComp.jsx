import styled from "styled-components";

const BuildComp = () => {
  return (
    <Container>
      <Card>
        <h2>Build Your Community</h2>
        <button>Get Started For free</button>
      </Card>
    </Container>
  );
};

export default BuildComp;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Card = styled.div`
  width: 450px;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  font-family: montserrat;
  margin-bottom: -80px;
  button {
    height: 40px;
    width: 200px;
    font-family: montserrat;
    background-color: hotpink;
    color: white;
    font-weight: 600;
    border-radius: 100px;
    outline: none;
    border: none;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
`;
