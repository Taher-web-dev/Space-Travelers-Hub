import React from 'react';
import { useSelector } from 'react-redux';

const ReservedMission = () => {
  const missions = useSelector((state) => state.missions.missions);
  const reservedMission = missions.filter((mission) => mission.reserved);
  return (
    <table style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <td>My Missions</td>
        </tr>
      </thead>
      <tbody>
        {reservedMission.map((mission) => {
          const { id, name } = mission;
          return (
            <tr key={id}>
              <td>{name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default ReservedMission;
