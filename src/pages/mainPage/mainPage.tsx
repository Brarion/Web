import React from 'react'

import {useStore} from "effector-react";
import {gameService} from "../../services/games-service/games-service";
import {userService} from "../../services/user-service/user-service";

import Carousel from "react-bootstrap/Carousel";

import s from './style.module.scss'


const MainPage = () => {
  const foundGames = useStore(gameService.$foundGames)

  const [index, setIndex] = React.useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  React.useEffect(() => {
    gameService.init()
    userService.init()
  }, [])

  return (
      <Carousel className={s.carousel} activeIndex={index} onSelect={(v) => handleSelect(v)}>
        {foundGames.map((game, index) => <Carousel.Item className={s.item}>
          <img
            className={`${s.image} d-block w-100`}
            src={game.image}
            alt={game.name}
            onClick={() => gameService.openGame(index)}
          />
        </Carousel.Item>)}
      </Carousel>
  )
}

export default MainPage;
