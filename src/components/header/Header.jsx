import React from "react";
import { useState } from "react";
import Cart from "../../UI/cart/cart";
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

function Header() {
    const [inCart, setInCart] = useState(1)

    return <div className={styles.header}>
        <div className={styles.header__body}>
            <Link to="/" className={styles.header__title}>
                Shevchik Games
            </Link>
            <Cart summ={'2442'} inCart={inCart} />
        </div>
    </div>
}
export default Header;