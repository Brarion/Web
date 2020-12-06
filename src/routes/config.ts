import {lazy} from 'react'
import {AppRoute} from "./types";

const MainPage = lazy(() => import('../pages/mainPage/mainPage'));
const LoginPage = lazy(() => import('../pages/loginPage/loginPage'));
const ShopPage = lazy(() => import('../pages/shopPage/shopPage'));
const GamePage = lazy(() => import('../pages/gamePage/gamePage'));

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
    path: '/game',
    component: GamePage,
    exact: true,
  },
]
