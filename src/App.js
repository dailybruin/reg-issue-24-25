import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
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
  z-index: -1;
`

const Background = styled.div`
position: relative;
width: 100%;
height: 8295.32px;  /* Change to auto or fit-content if you build cards to expand down */
background: 
    url(${background}), /* top layer background */
    url(${lights}); /* bottom layer background */
background-repeat: no-repeat;
`;
  return data && (
    <div className="App">
      <Header/>
      <Landing landing={data.landing}/>
      <Layout>
      <Issue/>
      <EditorLetter editor_letter={data.editor_letter}/>
      <Interactive interactive={data.interactive}/>
      <GradientBackground>
        <Background>
          <div><News articles={data.news}/></div>
          <div><Sports articles={data.sports}/></div>
          <div><Arts articles={data.arts}/></div>
          <div><Opinion articles={data.opinion}/></div>
          <div><Quad articles={data.quad}/></div>
          <div><Multimedia articles={data.multimedia}/></div>
          <div><Prime articles={data.prime}/></div>
        </Background>
      </GradientBackground>
      <div><About about={data.about}/></div>
      </Layout>
      <Footer/>
    </div>
  );
}

export default App;
