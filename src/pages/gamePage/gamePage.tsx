import React from "react";

import { RouteChildrenProps } from 'react-router'

import {useStore} from "effector-react";

import {gameService} from "../../services/games-service/games-service";
import {userService} from "../../services/user-service/user-service";

import {Button} from "@material-ui/core";

import s from './style.module.scss'

type Props = RouteChildrenProps<{ id: string }>

const GamePage:React.FC<Props> = ({match}) => {
  const currentGame = useStore(gameService.$currentGame)
  const currentGamePreview = useStore(gameService.$currentGamePreview)

  React.useEffect(() => {
    if (match) {
      gameService.findGame(Number(match.params.id))
    }
  }, [match])

  return (
    <>
      {currentGame !== null && <div className={s.wrapper}>
        <img src={currentGamePreview} alt={currentGame.name}/>
        <div className={s.gameWrapper}>
          <div>
            <h4 children={currentGame.name}/>
            <div children={currentGame.description}/>
            <div children={`Цена: ${currentGame.price}`}/>
          </div>
          <div className={s.btnWrapper}>
            <Button type="button" variant="contained" color="primary"
                    onClick={() => userService.buyGame(currentGame.id)}>
              Купить
            </Button>
          </div>
        </div>
      </div>
      }
    </>)
}

export default GamePage
