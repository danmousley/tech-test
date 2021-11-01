import React, { useState } from 'react';
import styles from './Team.module.scss';
import SideNav from '../../components/SideNav';
import SelectedTeam from '../../components/SelectedTeam';
import team from '../../data/team';

const Team = () => {
    const [teamList, setTeamList] = useState(team)
    const [selectedTeam, setSelectedTeam] = useState([])
    const [playerCounts, setPlayerCounts] = useState({"Goalkeeper": 0, "Defender": 0, "Midfielder": 0, "Attacker": 0})

    const checkTeam = (player) => {
        if (player.position == "Goalkeeper") {
            if (playerCounts["Goalkeeper"] == 1) {
                alert("Only 1 goalkeeper is allowed")
                return false
            } else {
                let newPlayerCounts = playerCounts
                newPlayerCounts["Goalkeeper"] += 1
                setPlayerCounts(newPlayerCounts)
                return true
            }
        } else if (player.position == "Defender") {
            if (playerCounts["Defender"] == 3) {
                alert("Only 3 defenders are allowed")
                return false
            } else {
                let newPlayerCounts = playerCounts
                newPlayerCounts["Defender"] += 1
                setPlayerCounts(newPlayerCounts)
                return true
            }
        } else if (player.position == "Midfielder") {
            if (playerCounts["Midfielder"] == 4) {
                alert("Only 4 midfielders are allowed")
                return false
            } else {
                let newPlayerCounts = playerCounts
                newPlayerCounts["Midfielder"] += 1
                setPlayerCounts(newPlayerCounts)
                return true
            }
        } else if (player.position == "Attacker") {
            if (playerCounts["Attacker"] == 3) {
                alert("Only 3 attackers is allowed")
                return false
            } else {
                let newPlayerCounts = playerCounts
                newPlayerCounts["Attacker"] += 1
                setPlayerCounts(newPlayerCounts)
                return true
            }
        } else return true;
    }

    const onSelect = (playerId) => {
        for (let i = 0; i < teamList.length; i++) {
            if (teamList[i].id == playerId) {
                if (checkTeam(teamList[i]) == true) {
                    let newSelectedTeam = [...selectedTeam]
                    let newTeamList = [...teamList]
                    newSelectedTeam.push(teamList[i])
                    newTeamList.splice(i, 1)
                    setTeamList(newTeamList)
                    setSelectedTeam(newSelectedTeam)
                }
            }
        }
    }

    const removePlayer = (player) => {
        for (let i = 0; i < selectedTeam.length; i++) {
            if (selectedTeam[i].id == player.id) {
                let newSelectedTeam = [...selectedTeam]
                let newTeamList = [...teamList]
                let newPlayerCounts = playerCounts
                newSelectedTeam.splice(i, 1)
                newTeamList.push(selectedTeam[i])
                newPlayerCounts[selectedTeam[i].position] -= 1
                setSelectedTeam(newSelectedTeam)
                setTeamList(newTeamList)
                setPlayerCounts(newPlayerCounts)
            }
        }
    }

    return (
        <>
            <nav className={styles.sideNav}>
                <SideNav teamList={teamList} onSelect={onSelect}/>
            </nav>
            <main className={styles.main}>
                <SelectedTeam removePlayer={removePlayer} selectedTeam={selectedTeam} />
            </main>
        </>
    )
}

export default Team
