import React from 'react';
import ReactDOM from 'react-dom';
import { thunk } from 'redux-thunk';
import { configureStore} from "@reduxjs/toolkit";
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import { spamFilter } from './redux/middleware';

import './index.css';
import App from './App';

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, spamFilter), 
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
