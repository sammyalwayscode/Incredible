import styled from "styled-components";
import Img1 from "../../assets/image-gallery-milkbottles.jpg";
import Img2 from "../../assets/image-gallery-orange.jpg";
import Img3 from "../../assets/image-gallery-cone.jpg";
import Img4 from "../../assets/image-gallery-sugarcubes.jpg";

const Galery = () => {
  return (
    <Container>
      <Wrapper>
        <GalleryOne>
          <img src={Img1} alt="" />
          <img src={Img2} alt="" />
        </GalleryOne>
        <GalleryTwo>
          <img src={Img3} alt="" />
          <img src={Img4} alt="" />
        </GalleryTwo>
      </Wrapper>
    </Container>
  );
};

export default Galery;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  /* width: 100%; */
  /* background-color: beige; */
  height: 300px;
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const GalleryOne = styled.div`
  width: 50vw;
  img {
    height: 100%;
    width: 25vw;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    width: 100vw;

    img {
      width: 50vw;
    }
  }
`;
const GalleryTwo = styled.div`
  width: 50vw;
  img {
    height: 100%;
    width: 25vw;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    width: 100vw;

    img {
      width: 50vw;
    }
  }
`;
