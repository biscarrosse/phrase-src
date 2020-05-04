// React:
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
// Libraries:
import { Normalize } from 'styled-normalize';
// Redux:
import { Provider } from 'react-redux';
import configureStore from './store/store';

const Root = () => {
  if (process.env.NODE_ENV !== 'development') {
    console.log = function() {};
  }
  console.log(`APP STARTS AT ${process.env.NODE_ENV} MODE`);

  const store = configureStore();
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Normalize />
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
