/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket } from '../../redux/rockets/rockets';

const RocketItem = (props) => {
  const { rocket } = props;
  const dispatch = useDispatch();

  const reserveRocket = () => {
    dispatch(bookRocket(rocket.id));
  };

  return (
    <div className="rocket-item">
      <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      <div>
        <h2>{rocket.name}</h2>
        <p>{rocket.description}</p>
        <button
          className="reserve-btn"
          type="button"
          onClick={reserveRocket}
          style={{ display: rocket.reserved ? 'none' : 'block' }}
        >
          Reserve Rocket
        </button>
        <button
          className="cancel-reserve-btn"
          type="button"
          style={{ display: !rocket.reserved ? 'none' : 'block' }}
        >
          Cancel Reservation
        </button>
      </div>
    </div>
  );
};

RocketItem.defaultProps = {
  rocket: {},
};

RocketItem.propTypes = {
  rocket: PropTypes.object,
};

export default RocketItem;
