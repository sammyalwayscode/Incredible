import styled from "styled-components";
import Card from "./Card";

const UpperContainer = () => {
  return (
    <Container>
      <Wrapper>
        <Card />
        <Card />
        <Card />
        <Card />
      </Wrapper>
    </Container>
  );
};

export default UpperContainer;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  background-color: aqua;
  justify-content: center;
`;
