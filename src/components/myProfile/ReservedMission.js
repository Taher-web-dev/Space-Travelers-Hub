import React from 'react';
import { useSelector } from 'react-redux';

const ReservedMission = () => {
  const missions = useSelector((state) => state.missions.missions);
  const reservedMission = missions.filter((mission) => mission.reserved);
  return (
    <div style={{ width: '100%' }}>
      <h2>My Missions</h2>
      {reservedMission.length !== 0 && (
        <div style={{
          border: '1px solid gray', width: '100%', marginRight: '5%', borderRadius: '4px',
        }}
        >
          {reservedMission.map((mission, index) => {
            const { id, name } = mission;
            return (
              <div
                key={id}
                style={{
                  opacity: '0.8', color: '#000', padding: '10px 0px 20px 10px', borderTop: index === 0 ? '0' : '1px solid gray',
                }}
              >
                {name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default ReservedMission;
