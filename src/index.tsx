import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom'
import {history} from './history'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./app/App";

const Index = () => {

  return (
    <Router history={history}>
      <App/>
    </Router>
  )
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);
