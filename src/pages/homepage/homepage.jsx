import React from "react";
import styles from './homepage.module.scss'
import { GAMES } from '../../GAMES.js'
import GameCard from "../../UI/gamecard/gamecard";

function HomePage() {
    return <div className={styles.homepage}>
        {GAMES.map((game, index) => {
            return <GameCard game={GAMES[index]} />
        })}
    </div>
}

export default HomePage;