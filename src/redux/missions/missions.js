const LOAD_MISSION = 'space/missions/LOAD_MISSION';
const MISSION_START = 'space/missions/MISSION_START';
const MISSION_FAILED = 'space/missions/MISSION_FAILED';
const loadMission = (payload) => ({
  type: LOAD_MISSION,
  payload,
});

const loadingStart = () => ({
  type: MISSION_START,
});

const manageFailure = (payload) => ({
  type: MISSION_FAILED,
  payload,
});
const fetchData = () => fetch('https://api.spacexdata.com/v3/missions');

const selectData = (data) => {
  const { mission_id: id, mission_name: name, description } = data;
  return {
    id,
    name,
    description,
  };
};
export const loadMissionsData = (dispatch) => {
  dispatch(loadingStart());
  fetchData()
    .then((res) => res.json())
    .then((result) => dispatch(loadMission(result)))
    .catch((err) => dispatch(manageFailure(err.message)));
};

const missionsReducer = (state = { missions: [] }, action) => {
  switch (action.type) {
    case MISSION_START:
      return {
        ...state,
        loading: true,
      };
    case MISSION_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOAD_MISSION:
      return {
        ...state,
        missions: action.payload.filter(selectData),
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default missionsReducer;
