import styled from "styled-components";

const Card = () => {
  return (
    <CardBox>
      <SecondComp>
        <Icon>FB</Icon>
        <span>@nathanf</span>
      </SecondComp>
      <ThirdComp>
        <span>1987</span>
        <small>Followers</small>
      </ThirdComp>
      <ForthComp>
        <DropIcon>Drop</DropIcon>
        <span>12 Today</span>
      </ForthComp>
    </CardBox>
  );
};

export default Card;

const CardBox = styled.div`
  height: 300px;
  width: 300px;
  background-color: #f0f3fa;
  border-top: 4px solid #2586df;
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
const SecondComp = styled.div`
  display: flex;

  span {
    margin-left: 5px;
    font-weight: 700;
  }
`;
const ThirdComp = styled.div`
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 50px;
    font-weight: bold;
  }
  small {
    font-size: 10px;
    letter-spacing: 5px;
    text-transform: uppercase;
  }
`;
const ForthComp = styled.div`
  display: flex;
`;
const Icon = styled.div``;
const DropIcon = styled.div``;
