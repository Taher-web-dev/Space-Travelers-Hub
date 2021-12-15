import React from 'react';
import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  const reservedRockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));

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
            My Rockets
          </td>
        </tr>
      </thead>
      <tbody>
        {reservedRockets.map((rocket) => {
          const { id, name } = rocket;
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

export default ReservedRockets;
