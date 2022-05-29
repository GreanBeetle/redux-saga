import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import axios from 'axios'
// create redux store ******************************
import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'; // connect sagas to redux
import rootSaga from './sagas'; // grab root saga from sagas/index

const sagaMiddleware = createSagaMiddleware() // create an instance of the saga middleware

// here we apply the middleware to the redux store
const store = createStore(reducers, applyMiddleware(sagaMiddleware))  

sagaMiddleware.run(rootSaga)
// create redux store ******************************

axios.default.withCredentials = true
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api'

const root = ReactDOM.createRoot(document.getElementById('root'));
  
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



