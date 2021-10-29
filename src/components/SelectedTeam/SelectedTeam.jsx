import React from 'react';
import styles from './SelectedTeam.module.scss';

const SelectedTeam = (props) => {
    const {selectedTeam} = props;
    const getSelectedTeam = () => {
        return selectedTeam.map((player) => {
            return (
                <div className={styles.playerCard}>
                    <h3>{player.name}</h3>
                    <h4>{player.position}</h4>
                    <h5>{player.nationality}</h5>
                </div>
            )
        })
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My Team</h1>
            <div className={styles.players}>
                {getSelectedTeam()}
            </div>
        </div>
    )
}

export default SelectedTeam
