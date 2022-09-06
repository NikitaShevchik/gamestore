import styles from './gamecard.module.scss'

function GameGenres({ game }) {
    return <div className={styles.gamecard__genres}>
        {game.genres.map((genre, index) => {
            return <div key={index} className={styles.gamecard__genre}>{genre}</div>
        })}
    </div>
}
export default GameGenres;