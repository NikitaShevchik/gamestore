import React from 'react';
import GameGenres from './gamegenres';
import PriceAndCart from './priceandcart';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../redux/games/reducer';
import styles from './gamecard.module.scss';

function GameCard({ game }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrentGame(game));
        navigate(`/app/${game.title}`)
    }

    return <div className={styles.gamecard} onClick={handleClick}>
        <div className={styles.gamecard__body}>
            <div className={styles.gamecard__image}>
                <img src={game.image} alt={game.title} />
            </div>
            <div className={styles.gamecard__textcontent}>
                <div className={styles.gamecard__title}>
                    {game.title}
                </div>
                <GameGenres game={game} />
            </div>
            <PriceAndCart game={game} />
        </div>
    </div>
}

export default GameCard;