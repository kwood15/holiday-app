import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:500,600');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  * {
    box-sizing: border-box;
  }

  #root {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }

  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    height: 100%;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.bodyColor};
    font-size: 1rem;
    line-height: 1.2;
    margin: 0;
    padding: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
  }

  p {
    color: ${props => props.theme.textColor};
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway', sans-serif;
    color: ${props => props.theme.headingColor};
  }

  legend {
    color: ${props => props.theme.primaryColor};
  }

  fieldset {
    border: 0;
    padding: 0 0 1.5rem;
  }
`;
