const GET_ROCKETS = 'space-travel/rockets/GET_ROCKETS';

const fetchRocketsData = () => fetch('https://api.spacexdata.com/v3/rockets')
  .then((response) => response.json());

const initialState = [];

export const getRockets = () => async (dispatch) => {
  const rockets = await fetchRocketsData();

  dispatch({ type: GET_ROCKETS, payload: rockets });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
