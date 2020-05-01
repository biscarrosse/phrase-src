// React:
import React from 'react';
// Components:
import Feed from './components/Feed';
import Layout from './components/Layout';
// style:
import { GlobalStyle } from './components/styles/global.style';
// Fontawesome:
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faBars,
  faLightbulb,
  faSkullCrossbones,
  faUserPlus,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faEnvelope,
  faBars,
  faLightbulb,
  faSkullCrossbones,
  faUserPlus,
  faChevronRight
);

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
