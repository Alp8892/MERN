import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Num">Num</NavLink>
            </li>
            <li>
                <NavLink to="/Hello">Hello</NavLink>
            </li>
            <li>
                <NavLink to="/Finale">Finale</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav