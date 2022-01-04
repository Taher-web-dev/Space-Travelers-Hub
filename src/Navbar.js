import { NavLink } from 'react-router-dom';
import LOGO from './assets/images/planet.png';

const Navbar = () => {
  const checkActive = (match, location) => {
    if (!location) return false;
    const { pathname } = location;
    return pathname === '/';
  };
  return (
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
  );
};
export default Navbar;
