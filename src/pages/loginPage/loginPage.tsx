import React from 'react';

import {Button} from "@material-ui/core";

import {loginService} from "../../services/login-service/login-service";
import {userService} from "../../services/user-service/user-service";

import s from './style.module.scss';

const LoginPage = () => {

  React.useEffect(() => {
    userService.init()
  }, [])

  return (
    <>
      <form className={s.form} noValidate autoComplete="off">
        <div className={s.input}>
          <label htmlFor="exampleInputEmail1">Имя аккаунта Steam</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                 onChange={(e) => loginService.changeUsername(e.target.value)}/>
        </div>
        <div className={s.input}>
          <label htmlFor="exampleInputPassword1">Пароль</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
                 onChange={(e) => loginService.changePassword(e.target.value)}/>
        </div>
        <Button type="button" variant="contained" color="primary" className={s.btn}
                onClick={() => loginService.login()}>
          Войти
        </Button>
      </form>
    </>
  )
}

export default LoginPage;
