import {createDomain} from "effector";
import {createReEffect} from "effector-reeffect";
import {gamesApi} from "../../api/games-api";

const buyGameFx = createReEffect({handler: gamesApi.buyGame})

const userDomain = createDomain('user domain')

const init = userDomain.createEvent()
const setMoney = userDomain.createEvent<number>()
const buyGame = userDomain.createEvent<number>()
const removeMoney = userDomain.createEvent<number>()

const $money = userDomain.createStore<number>(0).on(setMoney, (_, money) => money).on(removeMoney, (_, cache) => cache)

const $notEnoughMoney = userDomain.createStore<boolean>(false).on(buyGameFx.fail, () => true).reset(init)

buyGame.watch((id) => buyGameFx({id: id, token: localStorage.getItem('access_token') ?? ''}))

buyGameFx.doneData.watch((cache) => removeMoney(cache.cache))

export const userService = {
  init,
  $money,
  setMoney,
  buyGame,
  $notEnoughMoney
}
