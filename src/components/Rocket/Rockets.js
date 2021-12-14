import './Rockets.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketItem from './RocketItem';
import { getRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const rockets = useSelector((state) => state.rockets);

  return (
    <div className="container">
      {rockets.map((rocket) => (
        <RocketItem rocket={rocket} key={rocket.id} />
      ))}
    </div>
  );
};
export default Rockets;
