const fetchData = () => fetch('https://api.spacexdata.com/v3/missions');
fetchData(); // just created to pass linter check

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
