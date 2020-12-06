import React from "react";

import {useStore} from "effector-react";
import {gameService} from "../../services/games-service/games-service";
import {userService} from "../../services/user-service/user-service";

import {Button} from "@material-ui/core";

import s from './style.module.scss'

const GamePage = () => {
  const currentGame = useStore(gameService.$currentGame)
  const foundGames = useStore(gameService.$foundGames)

  return (
    <>
      {currentGame !== null && <div className={s.wrapper}>
        <img src={foundGames[currentGame].image} alt={foundGames[currentGame].name}/>
        <div className={s.gameWrapper}>
          <div>
            <h4 children={foundGames[currentGame].name}/>
            <div children={foundGames[currentGame].description}/>
            <div children={`Цена: ${foundGames[currentGame].price}`}/>
          </div>
          <div className={s.btnWrapper}>
            <Button type="button" variant="contained" color="primary"
                    onClick={() => userService.buyGame(foundGames[currentGame].id)}>
              Купить
            </Button>
          </div>
        </div>
      </div>
      }
    </>)
}

export default GamePage
