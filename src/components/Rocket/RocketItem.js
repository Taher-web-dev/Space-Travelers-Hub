/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = (props) => {
  const { rocket } = props;

  return (
    <div className="rocket-item">
      <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
      <div>
        <h2>{rocket.rocket_name}</h2>
        <p>{rocket.description}</p>
        <button type="button">Reserve Rocket</button>
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
