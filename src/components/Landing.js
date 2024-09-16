
import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #D3D7C6;
`;

const Image = styled.img`
  width: 100vw;
  height: auto;
  object-fit: cover;
`;

const Landing = ({landing}) => {

  return (
    <>
      <Container>
        <Image src={landing[0].landing_image} alt="Landing image" />
      </Container>
    </>
  );
}

export default Landing;
