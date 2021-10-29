import React from 'react';
import styles from './Card.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain, faSun, faCloud } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const {city} = props;
    const getIcon = () => {
        if (city.weather[0].main == "Clear") {
            return <FontAwesomeIcon icon={faSun} />
        } else if (city.weather[0].main == "Clouds") {
            return <FontAwesomeIcon icon={faCloud} />
        } else {
            return <FontAwesomeIcon icon={faCloudRain} />
        }
    }
    return (
        <div className={styles.card}>
            <header>
                <h3>{city.name}</h3>
                {getIcon()}
            </header>
            <hr></hr>
            <p>Temperature: {Math.round(city.main.temp)} °C</p>
            <p>Max Temp: {Math.round(city.main.temp_max)} °C</p>
            <p>Min Temp: {Math.round(city.main.temp_min)} °C</p>
            <p>Humidity: {Math.round(city.main.humidity)}</p>
        </div>
    )
}

export default Card
