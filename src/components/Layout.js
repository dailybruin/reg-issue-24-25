import React, {useState, useEffect, useRef} from 'react';
import Header from './Header';
import Footer from './Footer';
//import LandingAnim from './LandingAnim';
import NavBar from './NavBar';
import { useMediaQuery } from 'react-responsive';

import styled from "styled-components";

/* TODO: Remove (temporary for spacing until sections are set up)
         note that the Title elements returned below should also be removed */

const Title = styled.div`
    width: 100%;
    height: 15vh;
    background-color: #453D24;
    height: 1000px;
    color: white;
    font-family: "Inter", sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 600; /* Semi-bold */
    display: flex; /* Use flexbox */
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items horizontally */
`;

const Layout = () => {

  const navIds = ['editor-letter', 'interactive', 'news', 'sports', 'arts', 'opinion', 'quad', 'multimedia', 'prime', 'thirty', 'about'];

  const [offsetTops, setOffsetTops] = useState({});
  const layoutRef = useRef(null);

  useEffect(() => {
    const updateOffsets = () => {
        if (layoutRef.current) return;

        const sections = navIds.map(id => {
          return document.getElementById(id);
        });
        
        const offsets = {};
        /* TODO: correct logic, uncomment and delete testing portion below once sections are set up */
        //sections.forEach(div => {
            //offsets[div.id] = div.offsetTop;
            
        /* FOR TESTING */
        navIds.forEach((id, index) =>  {
            offsets[id] = 100 * index;

        });

        setOffsetTops(offsets);
    };

    updateOffsets();

    window.addEventListener('resize', updateOffsets); // Update on resize
    return () => window.removeEventListener('resize', updateOffsets);
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 456px)' });
  
  if (isMobile) {
    return (
      <div className="App" style={{overflow: 'visible'}}>
        <div id="title"></div>
        <NavBar offsets={offsetTops} />
        <Title></Title>
      </div>
    );
  }
  else {
    return (
      <div className="App" style={{overflow: 'visible'}}>
        <div id="title"></div>
        <Header />
        <NavBar offsets={offsetTops} />
        <Title />
        <Footer />
      </div>
    );
  }
};

  /*
  const isMobile = useMediaQuery({ query: '(max-width: 456px)' });
    if (isMobile) {
      return (
        <div className="App" style={{overflow: 'visible'}}>
          <div id="title" style={{overflow: 'visible'}}></div>
          <NavBar offsets={offsetTops} />
          <LandingAnim />
          {children}
          <Footer />
        </div>
      );
    } else 
    {
    return (
      <div className="App" style={{overflow: 'visible'}}>
        <div id="title"></div>
        <Header />
        <LandingAnim /> 
        <NavBar offsets={offsetTops} />
        {children}
        <Footer />
      </div>
    );
  }
};
*/

export default Layout;
