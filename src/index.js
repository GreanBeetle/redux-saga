import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import axios from 'axios'

// create redux store ******************************
import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducers)

axios.default.withCredentials = true
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api'


// 
// create redux store ******************************


const root = ReactDOM.createRoot(document.getElementById('root'));
  
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



