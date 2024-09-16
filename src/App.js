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

import Issue from './components/Issue';
import NavBar from './components/NavBar';
import Layout from "./components/Layout";


function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
    // TODO: replace with current link when AML is up
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/reg-issue-24-25")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])




  return data && (
    <div className="App">
      <Layout>
        <Issue/>
        <div id="editor-letter" key="editor-letter"><EditorLetter editor_letter={data.editor_letter}/></div>
        <div id="interactive" key="interactive"></div>
        <div id="news" key="news"><News articles={data.news}/></div>
        <div id="sports" key="sports"><Sports articles={data.sports}/></div>
        <div id="arts" key="arts"><Arts articles={data.arts}/></div>
        <div id="opinion" key="opinion"><Opinion articles={data.opinion}/></div>
        <div id="quad" key="quad"><Quad articles={data.quad}/></div>
        <div id="multimedia" key="multimedia"><Multimedia articles={data.multimedia}/></div>
        <div id="prime" key="prime"><Prime articles={data.prime}/></div>
      </Layout>
      <Footer/>
    </div>
  );
}

export default App;
