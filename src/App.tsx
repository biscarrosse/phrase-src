// React:
import React from 'react';
// Components:
import Feed from './components/Feed';
import Layout from './components/Layout';
// style:
import { GlobalStyle } from './components/styles/global.style';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Feed />
      </Layout>
    </>
  );
};

export default App;
