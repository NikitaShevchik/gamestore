import React from "react";
import styles from './homepage.module.scss'
import { GAMES } from '../../GAMES.js'
import GameCard from "../../UI/gamecard/gamecard";

function HomePage() {
    return <div className={styles.homepage}>
        <GameCard game={GAMES[0]} />
        <GameCard game={GAMES[1]} />
        <GameCard game={GAMES[2]} />
        <GameCard game={GAMES[3]} />
        <GameCard game={GAMES[4]} />
        <GameCard game={GAMES[5]} />
    </div>
}

export default HomePage;