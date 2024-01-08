import Header from "../static/Header";
import heroImg from "../assets/images/illustration-mockups.svg";
import bgImage from "../assets/images/bg-hero-desktop.svg";
import styled from "styled-components";

const HeroPage = () => {
  return (
    <Background>
      <Header />
      <Container>
        <Wrapper>
          <TextDiv>
            <Title>
              Build the community <br /> your fans will love
            </Title>
            <Content>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </Content>
            <button>Get Started For free</button>
          </TextDiv>

          <ImageDiv>
            <img src={heroImg} alt="" />
          </ImageDiv>
        </Wrapper>
      </Container>
    </Background>
  );
};

export default HeroPage;

const Background = styled.div`
  background-image: url(${bgImage});
  min-height: 85vh;
  width: 100%;
  height: 100%;
  background-color: #edfbfe;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: montserrat;
`;

const TextDiv = styled.div`
  width: 500px;
  margin-right: 70px;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;
    margin-bottom: 30px;
    text-align: center;
  }

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
`;
const Title = styled.h1`
  font-size: 35px;
`;
const Content = styled.div`
  margin-bottom: 20px;
`;
const ImageDiv = styled.div`
  width: 600px;
  /* background-color: red; */
  margin-left: 60px;
  @media (max-width: 800px) {
    margin: 0;
  }

  img {
    width: 100%;
  }
`;
