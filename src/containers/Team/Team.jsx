import React, { useState } from 'react';
import styles from './Team.module.scss';
import SideNav from '../../components/SideNav';
import SelectedTeam from '../../components/SelectedTeam';
import team from '../../data/team';

const Team = () => {
    const [teamList, setTeamList] = useState(team)
    const [selectedTeam, setSelectedTeam] = useState([])

    const onSelect = (playerId) => {
        for (let i = 0; i < teamList.length; i++) {
            if (teamList[i].id == playerId) {
                let newSelectedTeam = [...selectedTeam]
                let newTeamList = [...teamList]
                newSelectedTeam.push(teamList[i])
                newTeamList.splice(i, 1)
                setTeamList(newTeamList)
                setSelectedTeam(newSelectedTeam)
            }
        }
    }

    return (
        <>
            <nav className={styles.sideNav}>
                <SideNav teamList={teamList} onSelect={onSelect}/>
            </nav>
            <main className={styles.main}>
                <SelectedTeam selectedTeam={selectedTeam} />
            </main>
        </>
    )
}

export default Team
