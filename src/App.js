import './App.css';
import { React, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadMissionsData } from './redux/missions/missions';
import Rockets from './components/Rocket/Rockets';
import Missions from './components/Mission/Missions';
import MyProfile from './components/myProfile/myProfile';
import LOGO from './assets/images/planet.png';
import { getRockets } from './redux/rockets/rockets';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const checkActive = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === '/';
  };
  useEffect(() => dispatch(loadMissionsData()), []);
  return (
    <Router>
      <header>
        <nav>
          <div>
            <NavLink to="/">
              <img src={LOGO} alt="logo" />
            </NavLink>
            <NavLink to="/">
              <h1>Space Travelers&apos; Hub</h1>
            </NavLink>
          </div>

          <ul>
            <li>
              {' '}
              <NavLink to="/" activeClassName="active" isActive={checkActive}>Rockets</NavLink>
            </li>
            <li>
              {' '}
              <NavLink to="/Missions">Missions</NavLink>
            </li>
            |
            <li><NavLink to="/My Profile">My Profile</NavLink></li>
          </ul>
        </nav>
        <hr />
      </header>
      <Switch>
        <Route exact path="/"><Rockets /></Route>
        <Route path="/Missions"><Missions /></Route>
        <Route path="/My Profile"><MyProfile /></Route>
      </Switch>
    </Router>
  );
}

export default App;
