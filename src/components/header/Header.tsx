import React from 'react'

import {useStore} from "effector-react";
import {loginService} from "../../services/login-service/login-service";
import {userService} from "../../services/user-service/user-service";

import {Link} from 'react-router-dom'

import steamLogo from '../../assets/steam_logo.png'

import s from './style.module.scss'

const Header = () => {
  const isLoginIn = useStore(loginService.$isLoginIn)
  const money = useStore(userService.$money)
  const notEnoughMoney = useStore(userService.$notEnoughMoney)

  React.useEffect(() => {
    loginService.getMoney()
  }, [])

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link className={`${s.link} ${s.img}`} to="/">
          <img src={steamLogo} alt="Логотип" loading="lazy" width={176} height={44}/>
        </Link>
        <Link className={`${s.link} ${s.shop}`} to="/shop">Магазин</Link>
        {isLoginIn && <span className={notEnoughMoney ? s.notEnoughMoney : ''} children={`Деньги: ${money}`}/> }
        {!isLoginIn ? <Link className={s.link} to="/signIn">Войти</Link> :
          <Link className={s.link} to="/" onClick={() => loginService.exit()}>Выйти</Link>}
      </nav>
    </header>)
}

export default Header;
