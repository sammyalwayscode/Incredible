import styled from "styled-components";
const GetOnePage = () => {
  return (
    <Container>
      <Title>My Title</Title>
      <Price>22</Price>
      <Discription>My Content</Discription>
    </Container>
  );
};

export default GetOnePage;

const Container = styled.div`
  margin: 50px;
  background-color: #eeeeee;
`;
const Title = styled.h1``;
const Price = styled.h3``;
const Discription = styled.div``;
