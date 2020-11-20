import React from 'react'

import {Link} from 'react-router-dom'

import steamLogo from '../../assets/steam_logo.png'

import s from './style.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link className={`${s.link} ${s.img}`} to="/">
          <img src={steamLogo} alt="Логотип" loading="lazy" width={176} height={44}/>
        </Link>
        <Link className={`${s.link} ${s.shop}`} to="/shop">Магазин</Link>
        <Link className={s.link} to="/signIn">Войти</Link>
      </nav>
    </header>)
}

export default Header;
