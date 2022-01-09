import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  //@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //font-family: 'Montserrat', sans-serif;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  
  a {
    text-decoration: none;
  }
`;
