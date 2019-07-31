import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';

import reducer from './redux/reducers';

import App from './App';

// Initializing to an empty object, but here is where you could
// preload your redux state with initial values (localStorage/webStorage maybe!!!! private keys!!!!)
const preloadedState = {};

const store = createStore(
  reducer,
  preloadedState
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
