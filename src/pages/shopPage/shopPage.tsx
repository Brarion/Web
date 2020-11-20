import React from 'react';

import {games} from '../../games';

import Card from "react-bootstrap/Card";

import s from "./style.module.scss";

/*
<div class="card">
      <img class="card-img-top" src="../../../public/games/MyTimeAtPortia.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">My Time At Portia</h5>
        <p class="card-text">Начните новую жизнь в очаровательном городе Портии! Восстановите мастерскую своего отца и
          верните ей былую славу!</p>
      </div>
      <div class="card-body">
        <span>
          <p>Разработчик: </p>
          <a href="#" class="card-link">Pathea Games</a>
        </span>
        <span>
          <p>Издатель: </p>
          <a href="#" class="card-link">Team17 Digital Ltd</a>
        </span>
      </div>
    </div>
 */

const ShopPage = () => {
  return (
    <div className={s.wrapper}>
      <form className={s.form} noValidate autoComplete="off">
        <input type="text" placeholder="Игра"/>
        <input type="text" placeholder="Разработчик"/>
        <input type="text" placeholder="Издатель"/>
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
