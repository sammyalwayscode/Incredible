import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Wrapper>My Header</Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: skyblue;
`;
const Wrapper = styled.div``;
