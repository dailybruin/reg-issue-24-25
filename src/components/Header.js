import styled from 'styled-components';

import DBLogo from '../images/DailyBruinLogo.svg';

const DBHeader = styled("div")`
  z-index: 2001;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: black;
  width: 100%;
  padding: 0.2em 0;
  color: white; 
  font-family: 'ITC Century';
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 21.6px;

  /* Override default link styles */
  a {
    color: white; /* Set the color for the link text */
    text-decoration: none; /* Remove underline if desired */
  }
`;

const Header = () => {
  return (
    <DBHeader>
      <a href="https://dailybruin.com">
        Daily Bruin
      </a>
    </DBHeader>
  );
};

export default Header;
