import {LazyExoticComponent} from "react";

export type LazyLoadedComponent = LazyExoticComponent<() => JSX.Element>
export type CommonComponent = () => JSX.Element

export type AppRoute = {
  title: string
  path: string
  component: LazyLoadedComponent | CommonComponent
  exact?: boolean
}
