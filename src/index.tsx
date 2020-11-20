import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./app/App";

const Index = () => {
  const history = createBrowserHistory();

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
