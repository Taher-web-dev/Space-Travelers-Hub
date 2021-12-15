/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelbookRocket } from '../../redux/rockets/thunk/thunk';

const RocketItem = (props) => {
  const { rocket } = props;
  const dispatch = useDispatch();

  const reserveRocket = () => {
    dispatch(bookRocket(rocket.id));
  };

  const cancelReserveRocket = () => {
    dispatch(cancelbookRocket(rocket.id));
  };

  return (
    <div className="rocket-item">
      <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      <div>
        <h2>{rocket.name}</h2>
        <p>
          {rocket.reserved && (
            <span className="reserved-tag">Reserved</span>
          )}
          {` ${rocket.description}`}
        </p>
        {!rocket.reserved && (
          <button
            className="reserve-btn"
            type="button"
            onClick={reserveRocket}
          >
            Reserve Rocket
          </button>
        )}
        {rocket.reserved && (
          <button
            className="cancel-reserve-btn"
            type="button"
            onClick={cancelReserveRocket}
          >
            Cancel Reservation
          </button>
        )}

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
