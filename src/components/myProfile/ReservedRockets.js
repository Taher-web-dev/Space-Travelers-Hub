import React from 'react';
import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  const reservedRockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));

  return (
    <div style={{ width: '100%' }}>
      <h2>My Rockets</h2>
      {reservedRockets.length !== 0 && (
        <div style={{
          border: '1px solid gray', width: '100%', marginRight: '5%', borderRadius: '4px',
        }}
        >
          {reservedRockets.map((rocket, index) => {
            const { id, name } = rocket;
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

export default ReservedRockets;
