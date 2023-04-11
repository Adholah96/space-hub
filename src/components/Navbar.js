import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo-container">
      <img src={logo} alt="logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <ul>
      <li>
        <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Missions"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Profile"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default Navbar;
