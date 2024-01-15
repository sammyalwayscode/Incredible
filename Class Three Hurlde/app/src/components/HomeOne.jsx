import styled from "styled-components";
import homeImg from "../assets/images/illustration-grow-together.svg";

const HomeOne = () => {
  return (
    <Container>
      <Wrapper>
        <Hold>
          <TextDiv>
            <h2>Grow Together</h2>
            <p>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.{" "}
            </p>
          </TextDiv>
          <ImgDiv>
            <img src={homeImg} alt="" />
          </ImgDiv>
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default HomeOne;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  font-family: montserrat;
`;
const Wrapper = styled.div`
  width: 85%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Hold = styled.div`
  display: flex;
  padding: 40px 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;

const TextDiv = styled.div`
  width: 420px;
  margin-right: 70px;
  p {
    color: gray;
  }

  @media (max-width: 700px) {
    margin: 0;
    width: 95%;

    text-align: center;
  }
`;
const ImgDiv = styled.div`
  width: 400px;
  margin-left: 70px;

  img {
    width: 100%;
  }

  @media (max-width: 700px) {
    margin: 0;
    margin-bottom: 30px;
  }
  @media (max-width: 700px) {
    width: 300px;
  }
`;
