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
      <Header/>
      <div><News articles={data.news}/></div>
      <div><Sports articles={data.sports}/></div>
      <div><Arts articles={data.arts}/></div>
      <div><Opinion articles={data.opinion}/></div>
      <div><Quad articles={data.quad}/></div>
      <div><Multimedia articles={data.multimedia}/></div>
      <div><Prime articles={data.prime}/></div>
      {/*<EditorLetter editor_letter={data.editor_letter}/>*/}
      <Footer/>
    </div>
  );
}

export default App;
