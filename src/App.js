import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/myProfile';
import LOGO from './assets/images/planet.png';

function App() {
  return (
    <Router>
      <nav>
        <div>
          <img src={LOGO} alt="logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <ul>
          <li>
            {' '}
            <Link to="/">Rockets</Link>
          </li>
          <li>
            {' '}
            <Link to="/Missions">Missions</Link>
          </li>
          <li><Link to="/My Profile">My Profile</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/"><Rockets /></Route>
        <Route path="/Missions"><Missions /></Route>
        <Route path="/My Profile"><MyProfile /></Route>
      </Switch>
    </Router>

  );
}

export default App;
