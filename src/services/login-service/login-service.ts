import {createReEffect} from "effector-reeffect";
import {oauthApi} from "../../api/oauth-api";
import {combine, createDomain, sample} from "effector";
import {history} from '../../history'
import {userApi} from "../../api/user-api";
import {userService} from "../user-service/user-service";

const loginFx = createReEffect({handler: oauthApi.login})
const getUserCacheFx = createReEffect({handler: userApi.getCache})

const loginDomain = createDomain('login domain')

const init = loginDomain.createEvent()
const login = loginDomain.createEvent()
const exit = loginDomain.createEvent()
const changeUsername = loginDomain.createEvent<string>()
const changePassword = loginDomain.createEvent<string>()
const loginIn = loginDomain.createEvent()
const loginOut = loginDomain.createEvent()
const getMoney = loginDomain.createEvent()

const $username = loginDomain.createStore<string>('')
$username.on(changeUsername, (_, username) => username)
$username.reset(init)

const $password = loginDomain.createStore<string>('')
$password.on(changePassword, (_, password) => password)
$password.reset(init)

const $isLoginIn = loginDomain.createStore<boolean>(!!localStorage.getItem('access_token'))
$isLoginIn.on(loginIn, () => true)
$isLoginIn.on(loginOut, () => false)

sample({
  source: combine({
    username: $username,
    password: $password,
  }),
  clock: login,
  target: loginFx,
  fn: (data) => {
    return {
      login: data.username,
      password: data.password,
    }
  },
})

loginFx.doneData.watch((data) => {
  loginIn()
  history.push('/')
  localStorage.setItem('access_token', data.access_token)
  getUserCacheFx(data.access_token).then()
})

getMoney.watch(() => getUserCacheFx(localStorage.getItem('access_token') || '').then())

getUserCacheFx.doneData.watch((cache) => userService.setMoney(cache.cache))

exit.watch(() => {
  localStorage.removeItem('access_token')
  loginOut()
})

export const loginService = {
  init,
  login,
  exit,
  changeUsername,
  changePassword,
  $isLoginIn,
  getMoney,
}
