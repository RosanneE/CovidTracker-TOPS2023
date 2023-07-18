import { Link } from 'react-router-dom';
import React from 'react';
import Logo from '../Logo/Logo';

function Nav(props) {
  return (
    <nav className='nav-container'>   
    <Logo />
      <ul className='nav-list'>
        <li className='nav-list-item'>
          <Link to='/' >Home</Link>
        </li>
        <li className='nav-list-item'>
          <Link to='#' >Report My Test</Link>
        </li>
        <li className='nav-list-item'>
          <Link to='#' >FAQs</Link>
        </li>
        <li className='nav-list-item'>
          <Link to='#' >About Us</Link>
        </li>
        <li className='nav-list-item'>
          <Link to='#' >For Partners</Link>
        </li>
      </ul>
    </nav>

  );
}

export default Nav;
