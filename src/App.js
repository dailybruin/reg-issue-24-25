import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleCard from "./components/ArticleCard";

import Arts from './components/Arts';


function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
    // TODO: replace with current link when AML is up
		// fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/reg-issue-24-25")
    fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/grad-issue24-2/")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return data && (
    <div className="App">
      <Header/>
        <div id="arts"><Arts arts={data.arts} /></div>
      <Footer/>
    </div>
  );
}

export default App;
