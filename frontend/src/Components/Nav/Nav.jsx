import { Link } from 'react-router-dom';
import React, {useState } from 'react';
import Logo from '../Logo/Logo';
import '../../App.css';




function Nav(props) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuToggle = () => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
  };
  console.log('showMobileMenu:', showMobileMenu);

  return (
    <nav className='nav-container'>   
    <Logo />
    <div className='nav-hamburger' onClick={handleMobileMenuToggle}>
        <div className={`hamburger-line ${showMobileMenu ? 'open' : ''}`} />
        <div className={`hamburger-line ${showMobileMenu ? 'open' : ''}`} />
        <div className={`hamburger-line ${showMobileMenu ? 'open' : ''}`} />
    </div>
        <ul className={`nav-list ${showMobileMenu ? 'show' : ''}`}>
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
            <Link to='/partner-page' >For Partners</Link>
          </li>
        </ul>
      
    </nav>

  );
}

export default Nav;
