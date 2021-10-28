import React from 'react';
import styles from "./NavBar.module.scss";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <NavLink className={styles.nav__link} to="/">Home</NavLink>
            </div>
            <div className={styles.nav__apps}>
                <NavLink className={styles.nav__link} to="/weather">Weather</NavLink>
                <NavLink className={styles.nav__link} to="/quiz">Quiz</NavLink>
                <NavLink className={styles.nav__link} to="/team">Team</NavLink>
            </div>
        </nav>
    )
}

export default NavBar
