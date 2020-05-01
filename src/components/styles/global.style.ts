// import styled from 'styled-components';
// import * as palette from './colors';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
};
body {
  margin: 0;
  padding: 0; 
  height: 100vh;
  background: white;
  color: black;
  font-family: 'Open Sans', sans-serif;
}
`;
