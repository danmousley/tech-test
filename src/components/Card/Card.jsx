import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
    const {city} = props;
    const toDegreesCelcius = (farenheit) => {
        return Math.round((farenheit - 32) * (5 / 9))
    }
    return (
        <div className={styles.card}>
            <h3>{city.name}</h3>
            <hr></hr>
            <p>Temperature: {toDegreesCelcius(city.main.temp)} °C</p>
            <p>Max: {toDegreesCelcius(city.main.temp_max)} °C</p>
            <p>Min Temp: {toDegreesCelcius(city.main.temp_min)} °C</p>
            <p>Humidity: 77</p>
        </div>
    )
}

export default Card
