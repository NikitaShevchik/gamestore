import styles from './gamecard.module.scss'
import { useDispatch } from 'react-redux';
import { setItemInCart } from '../../redux/cart/reducer';

function PriceAndCart({ game }) {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(setItemInCart(game))
    }

    return <div className={styles.gamecard__buy}>
        <div className={styles.gamecard__price}>
            <span>{game.price} руб.</span>
        </div>
        <button className={styles.gamecard__incart} onClick={handleClick}>В корзину</button>
    </div>
}

export default PriceAndCart;