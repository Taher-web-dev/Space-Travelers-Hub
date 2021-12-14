import React from 'react';
import { useSelector } from 'react-redux';

const ReservedMission = () => {
  const missions = useSelector((state) => state.missions.missions);
  const reservedMission = missions.filter((mission) => mission.reserved);
  return (
    <table style={{ borderCollapse: 'collapse', width: '42.5%', marginRight: '5%' }}>
      <thead>
        <tr>
          <td style={{
            border: 'none',
            fontWeight: '552',
            opacity: '0.75',
            padding: '0 0 2.5px 0',
          }}
          >
            My Missions
          </td>
        </tr>
      </thead>
      <tbody>
        {reservedMission.map((mission) => {
          const { id, name } = mission;
          return (
            <tr key={id}>
              <td style={{ opacity: '0.8', color: '#000', padding: '10px 0px 20px 10px' }}>{name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default ReservedMission;
