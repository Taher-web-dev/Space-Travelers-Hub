import './App.css';
import { React, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadMissionsData } from './redux/missions/missions';
import Rockets from './components/Rocket/Rockets';
import Missions from './components/Mission/Missions';
import MyProfile from './components/myProfile/myProfile';
import { getRockets } from './redux/rockets/rockets';
import Navbar from './Navbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
    dispatch(loadMissionsData());
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><Rockets /></Route>
        <Route path="/Missions"><Missions /></Route>
        <Route path="/My Profile"><MyProfile /></Route>
      </Switch>
    </Router>
  );
}

export default App;
