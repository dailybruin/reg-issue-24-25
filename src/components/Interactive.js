
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background: #D3D7C6;
    width: 100%;
    height: 75em;
    display: flex;
    justify-content: center;
    align-items: flext-start;
    flex-direction: column;
`;

const Title = styled.div`
    width: 100%;
    height: auto;
    gap: 0px;
    opacity: 0px;
    font-family: Cinzel Decorative;
    font-size: 115px;
    font-weight: 700;
    line-height: 155.02px;
    text-align: center;
    color: #4C6953;
`;

const Image = styled.img`
    width: 53em;
    height: 53em;
    margin-left: 20%;
    gap: 0px;
    opacity: 0px;
    background: #4C6953;

`;

const Interactive = ({interactive}) => {

  return (
    <>
      <Container>
        <Title>{interactive[0].interactive_title}</Title>
        <Image src={interactive[0].interactive} alt="Interactive image" />
      </Container>
    </>
  );
}

export default Interactive;