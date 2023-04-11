import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

const Navbar = () => (
  <nav>
    <div className="nav-center">
      <NavLink to="/" className="logo">
        <img src={logo} alt="logo" />
      </NavLink>
      <ul className="menu">
        <li><NavLink className="nav-link active" to="/">Rockets</NavLink></li>
        <li><NavLink className="nav-link" to="categories">Missions</NavLink></li>
        <li><NavLink className="nav-link" to="categories">My Profile</NavLink></li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
