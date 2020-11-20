import React from 'react';

import {games} from '../../games';

import Card from "react-bootstrap/Card";

import s from "./style.module.scss";

const ShopPage = () => {
  return (
    <div className={s.wrapper}>
      <form className={s.form} noValidate autoComplete="off">
        <input type="text" placeholder="Игра" className="form-control"/>
        <input type="text" placeholder="Разработчик" className="form-control"/>
        <input type="text" placeholder="Издатель" className="form-control"/>
      </form>
      <div className={s.cardWrapper}>
        {games.map((game) =>
            <Card key={game.title} className={s.card}>
              <Card.Img variant="top" src={game.imgPath}/>
              <Card.Body>
                <div className={s.cardPartWrapper}>
                  <Card.Title children={game.title}/>
                  <Card.Text children={game.description}/>
                </div>
                <div className={s.cardPartWrapper}>
        <span className={s.creatorWrapper}>
          <p className={s.paragraph}>Разработчик: </p>
          <span className={s.link} children={game.developer}/>
        </span>
                  <span className={s.creatorWrapper}>
          <p className={s.paragraph}>Издатель: </p>
          <span className={s.link} children={game.publisher}/>
        </span>
                </div>
              </Card.Body>
            </Card>
        )}
      </div>
    </div>
  )
}

export default ShopPage;
