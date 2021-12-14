const GET_ROCKETS = 'space-travel/rockets/GET_ROCKETS';
const BOOK_ROCKET = 'space-travel/rockets/BOOK_ROCKET';

const fetchRocketsData = () => fetch('https://api.spacexdata.com/v3/rockets')
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

const initialState = [];

export const getRockets = () => async (dispatch) => {
  const rockets = await fetchRocketsData();
  dispatch({ type: GET_ROCKETS, payload: rockets });
};

export const bookRocket = (id) => async (dispatch) => {
  dispatch({ type: BOOK_ROCKET, payload: id });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case BOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
    default:
      return state;
  }
};

export default reducer;
