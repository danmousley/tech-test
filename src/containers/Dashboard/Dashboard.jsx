import React from 'react';
import styles from './Dashboard.module.scss';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tech Test</h1>
            <div className={styles.menu}>
                <div className={styles.menu__item}>
                    <Link to="/weather">Weather</Link>
                </div>
                <div className={styles.menu__item}>
                    <Link to="/quiz">Quiz</Link>
                </div>
                <div className={styles.menu__item}>
                    <Link to="/team">Football Team</Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
