import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Footer</h1>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  height: 300px;
  color: #fff;
  background-color: darkblue;
  width: 100%;
`;

const Wrapper = styled.div`
  padding-top: 100px;
  background-color: red;
`;
