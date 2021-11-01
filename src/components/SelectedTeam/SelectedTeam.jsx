import React from 'react';
import styles from './SelectedTeam.module.scss';

const SelectedTeam = (props) => {
    const {selectedTeam, removePlayer} = props;
    const getSelectedTeam = (position) => {
        return selectedTeam.map((player) => {
            const coachStyles = (player.role == "COACH") ? styles.coachCard : ""
            if (player.position == position) {
                return (
                    <div className={`${styles.playerCard} ${coachStyles}`}>
                        <h4>{player.name}</h4>
                        <p>Pos: {player.position || player.role}</p>
                        <p>Nat: {player.nationality}</p>
                        <button onClick={(e) => removePlayer(player)} className={styles.remove}>Remove</button>
                    </div>
                )
            }
        })
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My Team</h1>
            <main className={styles.team}>
                <section className={styles.allPlayers}>
                    <div className={styles.players}>
                        {getSelectedTeam("Goalkeeper")}
                    </div>
                    <div className={styles.players}>
                        {getSelectedTeam("Defender")}
                    </div>
                    <div className={styles.players}>
                        {getSelectedTeam("Midfielder")}
                    </div>
                    <div className={styles.players}>
                        {getSelectedTeam("Attacker")}
                    </div>
                </section>
                <section className={styles.coach}>
                    <div className={styles.players}>
                        {getSelectedTeam(null)}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default SelectedTeam
