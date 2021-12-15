import './Rockets.css';
import React from 'react';
import { useSelector } from 'react-redux';
import RocketItem from './RocketItem';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <div className="container" style={{ marginBottom: '50px' }}>
      {rockets.map((rocket) => (
        <RocketItem rocket={rocket} key={rocket.id} />
      ))}
    </div>
  );
};

export default Rockets;
