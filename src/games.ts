import {TGame} from "./types/types";

import TheWitcher from './assets/games/witcher.jpg'
import MyTimeAtPortia from './assets/games/MyTimeAtPortia.jpg'
import GraveyardKeeper from './assets/games/keeper.jpg'

export const games: TGame[] = [
  {
    title: 'The Witcher 3',
    imgPath: TheWitcher,
    description: 'Когда в Северных королевствах бушует война, вы заключаете величайший контракт своей жизни — отыскать Дитя предназначения, живое оружие, которое может изменить облик мира.',
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT RED',
  },
  {
    title: 'My Time At Portia',
    imgPath: MyTimeAtPortia,
    description: 'Начните новую жизнь в очаровательном городе Портии! Восстановите мастерскую своего отца и верните ей былую славу!',
    developer: 'Pathea Games',
    publisher: 'Team17 Digital Ltd',
  },
  {
    title: 'Graveyard Keeper',
    imgPath: GraveyardKeeper,
    description: 'Новая игра от создателей Punch Club - Graveyard Keeper. Самый недостоверный симулятор средневекового кладбища в этом году.',
    developer: 'Lazy Bear Games',
    publisher: 'tinyBuild',
  }
]
