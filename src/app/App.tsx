import React from 'react';

import Header from "../components/header/Header";
import Routes from "../routes/routes";

import s from './style.module.scss'

const App = () => {
  return (
    <div className={s.app}>
      <Header/>
      <Routes />
    </div>
  );
}

export default App;
