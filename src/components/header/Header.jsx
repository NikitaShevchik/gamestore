import React from "react";
import { useState } from "react";
import Cart from "../../UI/cart/cart";
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

function Header() {
    return <div className={styles.header}>
        <div className={styles.header__body}>
            <Link to="/" className={styles.header__title}>
                Shevchik Games
            </Link>
            <Cart />
        </div>
    </div>
}
export default Header;