// React:
import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
// Components:
import Home from './components/home/Home';
import About from './components/about/About';
import Error from './components/error/Error';
import Toast from './components/toast/Toast';
import Exercise from './components/exercise/Exercise';
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
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faEnvelope,
  faBars,
  faLightbulb,
  faSkullCrossbones,
  faUserPlus,
  faChevronRight,
  faChevronLeft
);

const App: React.FC = () => {
  const routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/exercise" exact>
        <Exercise />
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
