import styles from './gamecard.module.scss'
import GameGenres from './gamegenres';
import PriceAndCart from './priceandcart';

function GameCard({ game }) {
    return <div className={styles.gamecard}>
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