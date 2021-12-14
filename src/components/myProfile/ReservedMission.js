import React from "react";
import { useSelector } from "react-redux";
import missionsReducer from "../../redux/missions/missions";
const ReservedMission = () => {
  const missions = useSelector((state) => state.missions);
  const reservedMission = missions.filter((mission) => mission.reserved);
  return (
      <table style={{borderCollapse: 'collapse'}}>
          <thead>
            <tr>
              <td>My Missions</td>
            </tr>
          </thead>
          <tbody>
            {reservedMission.map((mission) => {
              const {name} = mission;
              return(
                <tr> 
                  <td>{name}</td>
                </tr>
              );
            })
            }
          </tbody>
      </table>
  )
}