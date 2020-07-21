import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import configureStore from './redux/store';
const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
