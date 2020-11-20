import React from 'react';

import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

import s from './style.module.scss';

const LoginPage = () => {
  return (
    <>
      <form className={s.form} noValidate autoComplete="off">
        <div className={s.input}>
          <label htmlFor="exampleInputEmail1">Имя аккаунта Steam</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className={s.input}>
          <label htmlFor="exampleInputPassword1">Пароль</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <Button variant="contained" color="primary" className={s.btn}>
          Войти
        </Button>
      </form>
      <div className={s.linkWrapper}>
        <Link className={s.link} to="/">Забыли пароль?</Link>
      </div>
    </>
  )
}

export default LoginPage;
