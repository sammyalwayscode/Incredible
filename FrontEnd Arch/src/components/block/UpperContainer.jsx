import styled from "styled-components";
import Card from "./Card";
// import testIcon from "../../assets/svg";

const UpperContainer = () => {
  return (
    <Container>
      <Wrapper>
        <Card userName="@jameskofo" totalFollowers="1543" headColor="pink" />
        <Card userName="@Jidebenson" totalFollowers="4223" headColor="red" />
        {/* <Card userName="@Jidebenson" totalFollowers="4223" myIcon={testIcon} /> */}
        <Card userName="@matinjames" totalFollowers="7172" />
        <Card userName="@godwinbest" totalFollowers="9917" />
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
