import React, { useState, useEffect } from "react";
import { mediaQueries } from './shared/config';
import './App.css';
import Footer from './components/Footer';
import EditorLetter from './components/EditorLetter';
import Landing from './components/Landing';
import Issue from './components/Issue';

import About from './components/About';
import Layout from './components/Layout';

import styled from 'styled-components';
import background from './images/background.png';
import lights from './images/lights.png';
import Westwordle from "./components/interactive/Westwordle";
import AnySection from "./components/AnySection";


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
    url(${lights}); /* bottom layer background */;
  background-repeat: no-repeat;
  background-position: center; /* Ensure the background is centered */

  ${mediaQueries.mobile} {
    background-position: center top; /* Adjust if needed for mobile */
  }
`;

return data && (
  <div className="App">

    <Layout>
    <div id="landing" key="landing"><Landing landing={data.landing}/></div>
      <Issue/>
      <div id="editor-letter" key="editor-letter"><EditorLetter editor_letter={data.editor_letter}/></div>
      {/* <div id="interactive" key="interactive"><Interactive interactive={data.interactive}/></div> */}
      <Westwordle />
      <GradientBackground>
      <Background>
        <AnySection title="news" articles={data.news} increaseMarginTop="true" />  {/* why is this last card wrong?? */}
        <AnySection title="sports" articles={data.sports} />
        <AnySection title="arts" articles={data.arts} />
        <AnySection title="opinion" articles={data.opinion} />
        <AnySection title="quad" articles={data.quad} />
        <AnySection title="multimedia" articles={data.multimedia} />
        <AnySection title="prime" articles={data.prime} />
      </Background>
        <div id="ab" key="ab"><About about={data.about}/></div>
      </GradientBackground>
      </Layout>
    <Footer/>
  </div>

);
}

export default App;


