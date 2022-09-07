import styles from './cart.module.scss';
import { useSelector } from 'react-redux';
import CartMenu from './cartMenu';
import { useState } from 'react';

function Cart() {
    const items = useSelector(state => state.cart.itemsInCart);
    const inCartGames = items.length;
    const [miniCart, setMiniCart] = useState(false);

    const totalPrice = items.reduce((acc, game) => acc += game.price, 0);

    return <div className={styles.buttoncart} >
        <div className={styles.cart} onClick={() => setMiniCart(!miniCart)}>
            <div className={styles.cart__icon}>
                {inCartGames > 0 && <div className={styles.cart__incart}>{inCartGames}</div>}
                <i className='bx bx-cart'></i>
            </div>
            <div className={styles.cart__summ}>
                {totalPrice > 0 && `${totalPrice} руб.`}
            </div>
        </div>
        {miniCart && <CartMenu items={items} totalPrice={totalPrice} setMiniCart={setMiniCart} miniCart={miniCart} />}
    </div>
}

export default Cart;