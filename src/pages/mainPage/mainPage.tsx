import React from 'react'

import Carousel from "react-bootstrap/Carousel";

import {games} from '../../games'

import s from './style.module.scss'


const MainPage = () => {
  const [index, setIndex] = React.useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
      <Carousel className={s.carousel} activeIndex={index} onSelect={(v) => handleSelect(v)}>
        {games.map((game) => <Carousel.Item className={s.item}>
          <img
            className="d-block w-100"
            src={game.imgPath}
            alt=""
          />
        </Carousel.Item>)}
      </Carousel>
  )
}

export default MainPage;
