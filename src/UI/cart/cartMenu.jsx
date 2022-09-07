import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './cart.module.scss';
import GameInCart from './gameincart';

function CartMenu({ items, totalPrice, miniCart, setMiniCart }) {
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        setMiniCart(false)
        navigate(`/order`)
    }, [navigate]);

    return <div className={styles.cartmenu}>
        <div className={styles.cartmenu__items}>
            {
                items.map(game => {
                    return <GameInCart game={game} />
                })
            }
        </div>
        {totalPrice ?
            <div>
                <div className={styles.cartmenu__total}>
                    <span>Итого:</span>
                    <span> {totalPrice} руб.</span>
                </div>
                <div>
                    <button className={styles.cartmenu__button} onClick={handleClick}>Оформить заказ</button>
                </div>
            </div>
            : <div className={styles.cartmenu__empty}>Ваша корзина пуста :(</div>
        }

    </div>
}

export default CartMenu;