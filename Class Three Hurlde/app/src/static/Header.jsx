import styled from "styled-components";
import myLogo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src={myLogo} alt="" />
        </Logo>
        <Button>Try It Free</Button>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 100px;
  /* background-color: skyblue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  width: 150px;
  /* background-color: red; */

  img {
    width: 100%;
  }
`;
const Button = styled.button`
  height: 40px;
  width: 170px;
  background-color: white;
  border-radius: 100px;
  outline: none;
  border: none;
  font-family: montserrat;
  font-weight: 600;
  cursor: pointer;
`;
