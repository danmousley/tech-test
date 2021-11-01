import React from 'react';
import styles from './SideNav.module.scss';

const SideNav = (props) => {
    const {teamList, onSelect} = props;
    const getTeamList = () => {
        return teamList.map((player) => {
            return <li><button onClick={e => onSelect(player.id)} className={styles.playerButton}>{player.name} ({player.position || player.role})</button></li>
        })
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.subtitle}>Select Players:</h1>
            <ul className={styles.playerList}>
                {getTeamList()}
            </ul>
        </div>
    )
}

export default SideNav
