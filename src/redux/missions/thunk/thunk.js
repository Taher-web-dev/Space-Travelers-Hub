import { loadingStart, loadMission, manageFailure } from '../actions/actions';

export const fetchData = () => fetch('https://api.spacexdata.com/v3/missions');

const loadMissionsData = () => (dispatch) => {
  dispatch(loadingStart());
  fetchData()
    .then((res) => res.json())
    .then((result) => dispatch(loadMission(result)))
    .catch((err) => dispatch(manageFailure(err.message)));
};
export default loadMissionsData;
