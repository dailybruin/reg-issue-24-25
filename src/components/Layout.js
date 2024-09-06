import React, {useState, useEffect, useRef} from 'react';
//import Header from './Header';
//import Footer from './Footer';
//import LandingAnim from './LandingAnim';
import NavBar from './NavBar';
//import { useMediaQuery } from 'react-responsive';

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
        sections.forEach(div => {
            offsets[div.id] = div.offsetTop;
        });

        setOffsetTops(offsets);
    };

    updateOffsets();

    window.addEventListener('resize', updateOffsets); // Update on resize
    return () => window.removeEventListener('resize', updateOffsets);
  }, []);

  return (
    <div className="App" style={{overflow: 'visible'}}>
      <div id="title"></div>
      <NavBar offsets={offsetTops} />
    </div>
  );
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
