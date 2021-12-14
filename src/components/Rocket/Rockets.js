import './Rockets.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RocketItem from './RocketItem';
import { getRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const rockets = [
    {
      id: 1,
      rocket_name: 'Falcon 1',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      flickr_images: [
        'https://imgur.com/DaCfMsj.jpg',
      ],
    },
    {
      id: 2,
      rocket_name: 'Falcon 9',
      description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
      flickr_images: [
        'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
      ],
    },
  ];

  return (
    <div className="container">
      {rockets.map((rocket) => (
        <RocketItem rocket={rocket} key={rocket.id} />
      ))}
    </div>
  );
};
export default Rockets;
