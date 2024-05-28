import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const GetOnePage = () => {
  const { id } = useParams();

  const [getOneData, setGetOneData] = useState({});

  const getOneApi = async () => {
    const responce = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setGetOneData(responce.data);
  };

  useEffect(() => {
    getOneApi();
  }, []);

  console.log(getOneData);
  return (
    <Container>
      <Title> {getOneData.title} </Title>
      <Price> ${getOneData.price} </Price>
      <Discription> {getOneData.description} </Discription>
      <img src={getOneData.image} alt="" />
    </Container>
  );
};

export default GetOnePage;

const Container = styled.div`
  margin: 50px;
  background-color: #eeeeee;
`;
const Title = styled.h1``;
const Price = styled.h3``;
const Discription = styled.div``;
