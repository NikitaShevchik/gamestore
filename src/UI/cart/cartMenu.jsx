import styles from './cart.module.scss';
import GameInCart from './gameincart';

function CartMenu({ items, totalPrice }) {
    return <div className={styles.cartmenu}>
        <div className={styles.cartmenu__items}>
            {
                items.map(game => {
                    return <GameInCart game={game} />
                })
            }
        </div>
        {totalPrice ?
            <div className={styles.cartmenu__total}>
                <span>Итого:</span>
                <span> {totalPrice} руб.</span>
            </div>
            : <div className={styles.cartmenu__empty}>Ваша корзина пуста :(</div>
        }

    </div>
}

export default CartMenu;