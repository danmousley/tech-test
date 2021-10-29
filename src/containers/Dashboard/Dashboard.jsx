import React from 'react';
import styles from './Dashboard.module.scss';
import { Link } from 'react-router-dom';
import weather from '../../images/weather.jpg';
import quiz from '../../images/quiz.jpg';
import football from '../../images/football.jpg';

const Dashboard = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tech Test</h1>
            <div className={styles.menu}>
                <div className={styles.menu__item}>
                    <Link to="/weather"><img src={weather} alt="weather" className={styles.image} /></Link>
                    
                </div>
                <div className={styles.menu__item}>
                    <Link to="/quiz"><img src={quiz} alt="quiz" className={styles.image} /></Link>
                </div>
                <div className={styles.menu__item}>
                    <Link to="/team"><img src={football} alt="football" className={styles.image} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
