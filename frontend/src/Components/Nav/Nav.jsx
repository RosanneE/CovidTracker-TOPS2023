import { Link } from 'react-router-dom';
import React, {useState } from 'react';
import Logo from '../Logo/Logo';
import globe from '../../Images/globe.png'
import '../../App.css';




function Nav(props) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuToggle = () => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
  };
  // console.log('showMobileMenu:', showMobileMenu);

  return (
    <nav className='nav-container'>   
    <Logo />
        <ul className={`nav-list ${showMobileMenu ? 'show' : ''}`}>
          <li className='nav-list-item'>
            <Link to='/' >Home</Link>
          </li>
          <li className='nav-list-item'>
            <Link to='/' >Report My Test</Link>
          </li>
          <li className='nav-list-item'>
            <Link to='/partner-page#faq-section' >FAQs</Link>
          </li>
          <li className='nav-list-item'>
            <Link to='/partner-page#about-us-section' >About Us</Link>
          </li>
          <li className='nav-list-item'>
            <Link to='/partner-page' >For Partners</Link>
          </li>
        </ul>
          <div className='nav-list-right'>
            <div className='nav-list-right' >
            <img src={globe} className='nav-list-item-icon' alt="globePng" />
            <Link to='#' className='nav-list-item-espanol'>Español +</Link>
            </div>
          </div>
      <div className='nav-hamburger' onClick={handleMobileMenuToggle}>
        <div className={`hamburger-line ${showMobileMenu ? 'open' : ''}`} />
        <div className={`hamburger-line ${showMobileMenu ? 'open' : ''}`} />
        <div className={`hamburger-line ${showMobileMenu ? 'open' : ''}`} />
      </div>
    </nav>

  );
}

export default Nav;
