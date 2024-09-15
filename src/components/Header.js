import styled from 'styled-components';


const DBHeader = styled("div")`
  z-index: 10;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: #F6E4E1;
  width: 100%;
  padding: 0.2em 0;
  color: #4C6953; 
  font-family: 'ITC Century';
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 21.6px;

  /* Override default link styles */
  a {
    color: #4C6953; /* Set the color for the link text */
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
