import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const OuterContainer = styled.div`
    background: #7F5D43;
    width: 100%;
    height: fit-content;
    ${mediaQueries.mobile} {
      padding-bottom: 10%;
    }
`;



const Title = styled.div`
    color: #FFF1E2;
    font-family: "Inter", sans-serif;
    font-size: 70px;
    font-style: normal;
    font-weight: 600; /* Semi-bold */
    text-transform: uppercase;
    padding-bottom: 1%;

    ${mediaQueries.mobile} {
        font-size: 30px;
        padding-bottom: 0;
      }
`;

const Container = styled.div`
  position: relative;
  margin: 2em auto 0 auto;
  width: 60%;
  height: fit-content;
  block-size: fit-content;
  border: 1px solid black;
  background: #3F2B1B;
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: light;
  font-style: normal;
  box-sizing: border-box;
  padding-bottom: 1%;

  ${mediaQueries.mobile} {
    width: 80%;
  }
`;

const Text = styled.div`
  padding: 1em 3em;
  ${mediaQueries.movile} {
    padding: 1em 1em;
  }
`;


const Content = styled.div`
  margin: 5%;
  margin-top: 7%;
  margin-bottom: 7%;
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: light;
  font-style: normal;
  font-size: 18px;
  line-height: 21.1px;
  text-align: justify;
  color: white;
  ${mediaQueries.mobile} {
    font-size: 14px;
  }
`;


const Aboout = ({about}) => {
  return (
    <>
    <Title>ABOUT</Title>
    </>
  );
}

export default About;