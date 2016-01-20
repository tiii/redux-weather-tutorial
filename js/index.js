import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './containers/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store = createStoreWithMiddleware(reducers);

ReactDOM.render((
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  ), document.getElementById('main'));
