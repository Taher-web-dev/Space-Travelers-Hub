import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Mission/Missions';
import MyProfile from './components/myProfile';
import LOGO from './assets/images/planet.png';

function App() {
  const checkActive = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === '/';
  };

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
