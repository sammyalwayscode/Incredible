import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const APIOne = () => {
  const [getData, setGetData] = useState([]);

  const getApi = async () => {
    const responce = await axios.get("https://fakestoreapi.com/products");
    setGetData(responce.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  console.log(getData);

  return (
    <div>
      {getData.map((myData) => (
        <Card key={myData.id}>
          <p>
            <b> Title </b>: {myData.title}
          </p>
          <p>
            <b>Price</b>: ${myData.price}
          </p>
          <div>
            <img src={myData.image} alt="" />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default APIOne;

const Card = styled.div`
  background-color: lightgray;

  img {
    height: 200px;
    width: 200px;
    background-color: gray;
  }
`;
