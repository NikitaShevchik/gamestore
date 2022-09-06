import styles from './gamecard.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';

function PriceAndCart({ game }) {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === game.id);

    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(game.id))
        } else {
            dispatch(setItemInCart(game))
        }
    }

    return <div className={styles.gamecard__buy}>
        <div className={styles.gamecard__price}>
            <span>{game.price} руб.</span>
        </div>
        {isItemInCart
            ? <button className={styles.gamecard__incart_active} onClick={handleClick}>Убрать из корзины</button>
            : <button className={styles.gamecard__incart} onClick={handleClick}>В корзину</button>}

    </div>
}

export default PriceAndCart;