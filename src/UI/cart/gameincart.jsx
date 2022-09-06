import styles from './cart.module.scss';
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../redux/cart/reducer';


function GameInCart({ game }) {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(deleteItemFromCart(game.id))
    }

    return <div className={styles.gameincart}>
        <div className={styles.gameincart__body}>
            <div className={styles.gameincart__name}>
                <span>{game.title}</span>
            </div>
            <div className={styles.gameincart__details}>
                <div className={styles.gameincart__price}>
                    <span>{game.price} руб.</span>
                </div>
                <div className={styles.gameincart__delete}>
                    <button onClick={handleClick}>
                        <i className='bx bx-x-circle'></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default GameInCart;