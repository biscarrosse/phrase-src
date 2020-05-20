// import styled from 'styled-components';
// import * as palette from './colors';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
  width: 100%;
};
body {
  margin: 0;
  padding: 0; 
  background: white;
  color: black;
  font-family: 'Muli','Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
`;
