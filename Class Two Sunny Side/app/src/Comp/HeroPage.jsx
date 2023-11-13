import styled from "styled-components";
// import bgImage from "../assets/image-header.jpg"

const HeroPage = () => {
  return (
    <Container>
      <Wrapper>
        <span>We are creative</span>
        <div>This is the hero page</div>
      </Wrapper>
    </Container>
  );
};

export default HeroPage;

const Container = styled.div`
  background-color: skyblue;
  height: 90vh;
  width: 100%;
`;
const Wrapper = styled.div``;
