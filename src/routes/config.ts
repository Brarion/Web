import React, {lazy} from 'react'
import {AppRoute} from "./types";

const MainPage: React.LazyExoticComponent<any> = lazy(() => import('../pages/mainPage/mainPage'));
const LoginPage: React.LazyExoticComponent<any> = lazy(() => import('../pages/loginPage/loginPage'));
const ShopPage: React.LazyExoticComponent<any> = lazy(() => import('../pages/shopPage/shopPage'));
const GamePage: React.LazyExoticComponent<any> = lazy(() => import('../pages/gamePage/gamePage'));

export const routes: AppRoute[] = [
  {
    title: 'Steam',
    path: '/',
    component: MainPage,
    exact: true,
  },
  {
    title: 'Вход',
    path: '/signIn',
    component: LoginPage,
    exact: true,
  },
  {
    title: 'Магазин',
    path: '/shop',
    component: ShopPage,
    exact: true,
  },
  {
    title: 'Игра',
    path: '/game/:id',
    component: GamePage,
    exact: true,
  },
]
