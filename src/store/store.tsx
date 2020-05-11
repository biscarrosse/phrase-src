// Redux
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
// reducers
import sidebarReducer from './sidebar/reducer';
import modalReducer from './sidebar/reducer';
import colorModeReducer from './colorMode/reducer';
import languageReducer from './language/reducer';
import toastReducer from './toast/reducer';
import exerciseReducer from './exercise/reducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  modal: modalReducer,
  colorMode: colorModeReducer,
  language: languageReducer,
  toast: toastReducer,
  exercise: exerciseReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () => {
  const middlewares = [thunkMiddleware, logger];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  return store;
};

export default configureStore;
