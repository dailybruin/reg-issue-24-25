
import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";

const OuterContainer = styled.div`
    background: #D3D7C6;
    width: 100%;
    height: fit-content;
    
    ${mediaQueries.mobile} {
      padding-bottom: 10%;
    }
`;



const Title = styled.div`
    color: #4C6953;
    font-family: "Cinzel", serif;
    font-size: 115px;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
    padding-bottom: 1%;
    padding-top: 5%;

    ${mediaQueries.mobile} {
        font-size: 30px;
        padding-bottom: 0;
      }
`;

const Container = styled.div`
  position: relative;
  margin: 0em auto 0 auto;
  width: 100%;
  height: fit-content;
  block-size: fit-content;
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
  margin: 0 auto;
  margin-top: 7%;
  margin-left: 8%;
  font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: light;
  font-style: normal;
  font-size: 18px;
  line-height: 21.1px;
  text-align: justify;
  color: #4C6953;
  column-count: 2;
  column-gap: 6em;
  width: 90%;
  height: fit-content;
  box-sizing: border-box;

  ${mediaQueries.mobile} {
    font-size: 14px;
  }
`;

const Box = styled.div`
  width: 40em;
  height: fit-content;
  gap: 0px;
  border-radius: 20px;
  opacity: 0px;
  background: #84A98C;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  ${mediaQueries.mobile} {
    width: 90%;
    max-width: 90%;
    padding: 1em;
  }
`

const Paragraph = styled.div`
  width: auto;
  height: auto;
  gap: 0px;
  opacity: 0px;
  font-family: PT Sans;
  font-size: 30px;
  font-weight: 400;
  line-height: 38.82px;
  text-align: center;
  color: #F6E4E1;
  padding: 2em;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

`

const SubTitle = styled.div`
  color: #4C6953;
  font-family: "Josefin Sans", serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  padding-top: 10%;

  ${mediaQueries.mobile} {
      font-size: 30px;
      padding-bottom: 0;
    }
`

export default function About(props) {
  let first = true;

  return (
    <OuterContainer>
      <Title>about</Title>
      <Box>
        <Paragraph>Like what you see? <br /><br />Apply for a Daily Bruin internship now at <strong>apply.uclastudentmedia.com</strong></Paragraph>
      </Box>
      <SubTitle>DAILY BRUIN EDITORIAL STAFF</SubTitle>
      <Container>
        <Text>
          <Content>
            {props.about.map((info, index) => {
              if (info.type === "paragraph") {
                return <p key={index}>{info.content}</p>;
              } else if (info.type === "Name_Position") {
                return (
                  <div key={index} style={{ textAlign: "left" }}>
                    {info.content}
                  </div>
                );
              } else if (info.type === "Section_header" && first) {
                return (
                  <p
                    key={index}
                    style={{
                      fontWeight: "bold",
                      marginTop: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    {info.content}
                  </p>
                );
                first = false;
              } else if(info.type === "Section_header" && !first) {
                return (
                  <p
                    key={index}
                    style={{
                      fontWeight: "bold",
                      marginTop: "30px",
                      marginBottom: "0px",
                    }}
                  >
                    {info.content}
                  </p>
                );
              }else {
                return <p key={index}>{info.content}</p>;
              }
            })}
          </Content>
        </Text>
      </Container>
    </OuterContainer>
  );
}
