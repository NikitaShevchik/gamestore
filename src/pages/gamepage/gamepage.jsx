import React from "react";
import { useSelector } from "react-redux";
import GameGenres from "../../UI/gamecard/gamegenres";
import PriceAndCart from "../../UI/gamecard/priceandcart";
import styles from './gamepage.module.scss'

function GamePage() {
    const game = useSelector(state => state.game.currentGame);

    return <div className={styles.gamepage}>
        <div className={styles.gamepage__title}>
            <span> {game.title}</span>
        </div>
        <div className={styles.gamepage__body}>
            <div className={styles.gamepage__video}>
                <iframe
                    src={game.video}
                    width='90%'
                    height='450px'
                    title='YouTube Video Player'
                >
                </iframe>
            </div>
            <div className={styles.gamepage__gamecard}>
                <div className={styles.gamepage__gamebody}>
                    <div className={styles.gamepage__gameimage}>
                        <img src={game.image} alt={game.title} />
                    </div>
                    <div className={styles.gamepage__gamedescription}>
                        <span>{game.description}</span>
                    </div>
                    <div className={styles.gamepage__gamegenres}>
                        <span>Популярные метки для этого продукта:</span>
                        <GameGenres game={game} />
                    </div>
                    <div className={styles.gamepage__pricecart}>
                        <PriceAndCart game={game} />
                    </div>
                </div>

            </div>
        </div>
    </div>
}

export default GamePage; 