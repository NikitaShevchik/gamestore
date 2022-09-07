import { useDispatch } from 'react-redux';
import styles from './orederpage.module.scss';
import { deleteItemFromCart } from '../../redux/cart/reducer';

function OrderedGame({ game }) {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(deleteItemFromCart(game.id))
    }

    return <div className={styles.ordergame}>
        <div className={styles.ordergame__body}>
            <div className={styles.ordergame__image}>
                <img src={game.image} alt={game.title} />
            </div>
            <div className={styles.ordergame__title}>
                {game.title}
            </div>
            <div className={styles.ordergame__price}>
                <span>{game.price} руб.</span>
                <button onClick={handleClick}>
                    <i className='bx bx-x-circle'></i>
                </button>
            </div>
        </div>
    </div>
}
export default OrderedGame;