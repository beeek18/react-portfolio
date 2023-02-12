import { NavLink } from 'react-router-dom';

import './style.css';

import { BtnDarkMode } from '../BtnDarkMode';

export const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  const checkLink = ({ isActive }) => isActive ? activeLink : normalLink

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">

          <NavLink to='/' className="logo">
            <strong>Portfolio</strong> @beeek18
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to='/' className={checkLink}>Home</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to='/projects' className={checkLink}>Projects</NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to='/contacts' className={checkLink}>Contacts</NavLink>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}
