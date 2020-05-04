// React:
import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
// Components:
import Feed from './components/Feed';
import About from './components/about/About';
import Error from './components/error/Error';
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
  const routes = (
    <Switch>
      <Route path="/" exact>
        <Feed />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  );

  return (
    <>
      <GlobalStyle />
      <Layout>{routes}</Layout>
    </>
  );
};

export default App;
