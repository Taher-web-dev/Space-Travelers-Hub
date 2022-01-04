import {
  MISSION_START, MISSION_FAILED, LEAVE_MISSION, LOAD_MISSION, JOIN_MISSION,
} from '../actions/actions';

const selectData = (arr) => {
  const filteredArray = [];
  arr.forEach((element) => {
    const { mission_id: id, mission_name: name, description } = element;
    filteredArray.push({
      id,
      name,
      description,
    });
  });
  return filteredArray;
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
        missions: selectData(action.payload),
        loading: false,
        error: null,
      };
    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.id !== action.payload) {
            return mission;
          }
          return {
            ...mission,
            reserved: true,
          };
        }),
      };
    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.id !== action.payload) {
            return mission;
          }
          return {
            ...mission,
            reserved: false,
          };
        }),
      };
    default:
      return state;
  }
};

export default missionsReducer;
