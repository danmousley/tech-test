import React from 'react';
import styles from './CardList.module.scss';
import Card from '../Card';

const CardList = (props) => {
    const {weather} = props;
    const getWeatherCards = () => {
        console.log(weather)
        return weather.map((city) => {
            return (
                <div className={styles.card} key={city.id}>
                        <Card city={city}/>
                </div>
            )
        })
    }
    return (
        <>
            <section className={styles.cards}>
                { getWeatherCards() }
            </section>
        </>
    )
}

export default CardList
