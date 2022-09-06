import styles from './cart.module.scss'

function Cart({ summ, inCart }) {
    return <button className={styles.buttoncart}>
        <div className={styles.cart}>
            <div className={styles.cart__icon}>
                {inCart > 0 && <div className={styles.cart__incart}>{inCart}</div>}
                <i className='bx bx-cart'></i>
            </div>
            <div className={styles.cart__summ}>
                {summ > 0 && `${summ} руб.`}
            </div>
        </div>
    </button>
}

export default Cart;