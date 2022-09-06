import styles from './gamecard.module.scss'

function PriceAndCart({ game }) {
    return <div className={styles.gamecard__buy}>
        <div className={styles.gamecard__price}>
            <span>{game.price} руб.</span>
        </div>
        <button className={styles.gamecard__incart}>В корзину</button>
    </div>
}

export default PriceAndCart;