import React, { useEffect, useState } from 'react';
import styles from './Weather.module.scss';
import CardList from '../../components/CardList';
import getWeather from '../../services/weather.service';

const Weather = () => {
    const [weather, setWeather] = useState([])

    useEffect(async () => {
        const london = await getWeather(2643744);
        const bristol = await getWeather(4749005);
        const rome = await getWeather(4219762);
        
        setWeather([london, bristol, rome]);
      }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Weather</h1>
            <div className={styles.cardList}>
                <CardList weather={weather}/>
            </div>
        </div>
    )
}

export default Weather
