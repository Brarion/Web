import React from 'react';

import {useStore} from "effector-react";
import {gameService} from "../../services/games-service/games-service";
import {userService} from "../../services/user-service/user-service";

import Card from "react-bootstrap/Card";

import s from "./style.module.scss";

const ShopPage = () => {
  const {gameInput, developerInput, publisherInput} = useStore(gameService.$inputs)
  const foundGames = useStore(gameService.$foundGames)
  const isClicked = useStore(gameService.$isClicked)

  React.useEffect(() => {
    gameService.clearFoundGames()
    userService.init()
  }, [])

  return (
    <div className={s.wrapper}>
      <form className={s.form} noValidate autoComplete="off">
        <input type="text" placeholder="Игра" className="form-control" value={gameInput}
               onChange={(e) => gameService.changeGame(e.target.value)}/>
        <input type="text" placeholder="Разработчик" className="form-control" value={developerInput}
               onChange={(e) => gameService.changeDeveloper(e.target.value)}/>
        <input type="text" placeholder="Издатель" className="form-control" value={publisherInput}
               onChange={(e) => gameService.changePublisher(e.target.value)}/>
        <button type='button' className='btn btn-primary' onClick={() => gameService.find()}>
          Найти
        </button>
      </form>
      {foundGames.length > 0 ?
        <div className={s.cardWrapper}>
          {foundGames.map((game) => {
            return <Card key={game.id} className={s.card} onClick={() => gameService.openGame(game.id)}>
              <Card.Img variant="top" src={game.image}/>
              <Card.Body>
                <div className={s.cardPartWrapper}>
                  <Card.Title children={game.name}/>
                  <Card.Text children={game.description}/>
                </div>
                <div className={s.cardPartWrapper}>
        <span className={s.creatorWrapper}>
          <p className={s.paragraph}>Разработчик: </p>
          <span className={s.link} children={game.developer.name}/>
        </span>
                  <span className={s.creatorWrapper}>
          <p className={s.paragraph}>Издатель: </p>
          <span className={s.link} children={game.publisher.name}/>
        </span>
                </div>
              </Card.Body>
            </Card>
          })}
        </div> :
        <div className={s.spanWrapper}>
          <span>{isClicked ? 'Нет таких игр': ''}</span>
        </div>}
    </div>
  )
}

export default ShopPage;
