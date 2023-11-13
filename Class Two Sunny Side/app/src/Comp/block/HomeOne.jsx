import styled from "styled-components";
import eggTest from "../../assets/image-header.jpg";

const HomeOne = () => {
  return (
    <Container>
      <Wrapper>
        <TextPart>
          <TextPartHold>
            <h2>Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you
            </p>
            <a href="">Learn More</a>
          </TextPartHold>
        </TextPart>
        <EggPart>
          <img src={eggTest} alt="egg" />
        </EggPart>
      </Wrapper>
    </Container>
  );
};

export default HomeOne;

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
`;
const TextPart = styled.div`
  width: 50vw;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextPartHold = styled.div`
  width: 60%;
  height: 80%;
  background-color: green;
  font-size: 20px;
  margin: 50px 0;
`;
const EggPart = styled.div`
  width: 50vw;
  background-color: yellow;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
