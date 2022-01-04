import { GET_ROCKETS, BOOK_ROCKET, CANCEL_BOOK_ROCKET } from '../actions/actions';

export const fetchRocketsData = () => fetch('https://api.spacexdata.com/v3/rockets')
  .then((response) => response.json())
  .then((response) => response.map((rocket) => (
    {
      id: rocket.id,
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      flickr_images: rocket.flickr_images,
      description: rocket.description,
    }
  )));

export const getRockets = () => async (dispatch) => {
  const rockets = await fetchRocketsData();
  dispatch({ type: GET_ROCKETS, payload: rockets });
};

export const bookRocket = (id) => async (dispatch) => {
  dispatch({ type: BOOK_ROCKET, payload: id });
};

export const cancelbookRocket = (id) => async (dispatch) => {
  dispatch({ type: CANCEL_BOOK_ROCKET, payload: id });
};
