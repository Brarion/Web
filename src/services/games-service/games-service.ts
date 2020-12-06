import {combine, createDomain, sample} from "effector";
import {createReEffect} from "effector-reeffect";
import {gamesApi, TGetGames, TGameWithImage} from "../../api/games-api";
import {attachLogger} from "effector-logger/attach";
import {history} from "../../history";

const findGamesFx = createReEffect({handler: gamesApi.getGames})
const getPreviewFx = createReEffect({handler: gamesApi.getPreview})

const gamesDomain = createDomain('games domain')

attachLogger(gamesDomain)

const init = gamesDomain.createEvent()
const changeGame = gamesDomain.createEvent<string>()
const changeDeveloper = gamesDomain.createEvent<string>()
const changePublisher = gamesDomain.createEvent<string>()
const find = gamesDomain.createEvent()
const clearFoundGames = gamesDomain.createEvent()
const openGame = gamesDomain.createEvent<number>()

const $gameInput = gamesDomain.createStore<string>('').on(changeGame, (_, game) => game).reset([init, changeDeveloper, changePublisher])
const $developerInput = gamesDomain.createStore<string>('').on(changeDeveloper, (_, developer) => developer).reset([init, changeGame, changePublisher])
const $publisherInput = gamesDomain.createStore<string>('').on(changePublisher, (_, publisher) => publisher).reset([init, changeGame, changeDeveloper])

const $foundGames = gamesDomain.createStore<TGameWithImage[]>([]).on(getPreviewFx.doneData, (_, games) => games).reset([init, clearFoundGames])

const $isClicked = gamesDomain.createStore<boolean>(false).on(find, () => true).reset(init)

const $currentGame = gamesDomain.createStore<number | null>(null).on(openGame, (_, index) => index).reset([init, find])

sample({
  source: combine({
    gameInput: $gameInput,
    developerInput: $developerInput,
    publisherInput: $publisherInput,
  }),
  clock: [find, init],
  target: findGamesFx,
  fn: (inputs) => {
    const data: TGetGames = {
      gameNameStart: inputs.gameInput,
      developerNameStart: inputs.developerInput,
      publisherNameStart: inputs.publisherInput,
    }

    return data
  }
})

sample({
  source: findGamesFx.doneData,
  target: getPreviewFx,
  fn: (data) => data
})

openGame.watch(() => {
  history.push('/game')
})

export const gameService = {
  init,
  changeGame,
  changeDeveloper,
  changePublisher,
  find,
  $inputs: combine({
    gameInput: $gameInput,
    developerInput: $developerInput,
    publisherInput: $publisherInput,
  }),
  $foundGames,
  $isClicked,
  clearFoundGames,
  openGame,
  $currentGame,
}
