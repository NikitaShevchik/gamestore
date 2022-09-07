import { useSelector } from 'react-redux';
import GameInCart from '../../UI/cart/gameincart';
import OrderedGame from './orderedgame';
import styles from './orederpage.module.scss'

function OrderPage() {
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = items.reduce((acc, game) => acc += game.price, 0);

    return <div className={styles.orderpage}>
        {
            items.length > 0 ?
                <div className={styles.orderpage__body}>
                    <div className={styles.orderpage__games}>
                        {items.map(game => {
                            return <OrderedGame game={game} />
                        })}
                    </div>
                    <div className={styles.orderpage__total}>
                        <span>{items.length} товар(a) на сумму {totalPrice} руб.</span>
                    </div>
                </div>
                : <div className={styles.orderpage__empty}>
                    <span>Ваша корзина пуста</span>
                </div>
        }
    </div>
}

export default OrderPage;