import styled from "styled-components";
import eggTest from "../../assets/image-transform.jpg";

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
  height: 500px;
`;
const TextPart = styled.div`
  width: 50vw;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextPartHold = styled.div`
  width: 60%;
  height: 80%;
  /* background-color: green; */
  font-size: 20px;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const EggPart = styled.div`
  width: 50vw;
  /* height: 500px; */
  background-color: yellow;

  img {
    width: 50vw;
    height: 100%;
    object-fit: cover;
  }
`;
