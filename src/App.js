import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import EditorLetter from './components/EditorLetter';
import styled from 'styled-components';
import background from './images/background.png';
import lights from './images/lights.png';

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
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
      <EditorLetter editor_letter={data.editor_letter}/>
      <GradientBackground>
      <Background>
        {/* content here */}
      </Background>
      </GradientBackground>
      <Footer/>
    </div>
  );
}

export default App;
