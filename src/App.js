import React, { useState, useEffect } from "react";
import './App.css';
import Footer from './components/Footer';
import EditorLetter from './components/EditorLetter';
import Arts from './components/Arts';
import News from './components/News';
import Sports from './components/Sports';
import Opinion from './components/Opinion';
import Quad from './components/Quad';
import Multimedia from './components/Multimedia';
import Prime from './components/Prime';
import Landing from './components/Landing';
import Issue from './components/Issue';
import Interactive from './components/Interactive';
import About from './components/About';
import Layout from './components/Layout';

import styled from 'styled-components';
import background from './images/background.png';
import lights from './images/lights.png';


function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
    // TODO: replace with current link when AML is up
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/reg-issue-24-25")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])




const GradientBackground = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  background: #4C6953;
  
`

const Background = styled.div`
position: relative;
width: 100%;
height: fit-content;  /* Change to auto or fit-content if you build cards to expand down */
background: 
    url(${background}), /* top layer background */
    url(${lights}); /* bottom layer background */
background-repeat: no-repeat;
`;
  return data && (
    <div className="App">
      <Layout>
      <div id="landing" key="landing"><Landing landing={data.landing}/></div>
        <Issue/>
        <div id="editor-letter" key="editor-letter"><EditorLetter editor_letter={data.editor_letter}/></div>
        <div id="interactive" key="interactive"><Interactive interactive={data.interactive}/></div>
        <GradientBackground>
          <Background>
            <div id="news" key="news"><News articles={data.news}/></div>
            <div id="sports" key="sports"><Sports articles={data.sports}/></div>
            <div id="arts" key="arts"><Arts articles={data.arts}/></div>
            <div id="opinion" key="opinion"><Opinion articles={data.opinion}/></div>
            <div id="quad" key="quad"><Quad articles={data.quad}/></div>
            <div id="multimedia" key="multimedia"><Multimedia articles={data.multimedia}/></div>
            <div id="prime" key="prime"><Prime articles={data.prime}/></div>
          </Background>
          <div id="ab" key="ab"><About about={data.about}/></div>
        </GradientBackground>
        </Layout>
      <Footer/>
    </div>
  
  );
}

export default App;
