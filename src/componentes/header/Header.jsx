import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaBiohazard } from 'react-icons/fa';
import './header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <nav className='header-container'>
      <div className='header-container__logo'>
      <FaBiohazard />
      </div>
      <div className={`header-container__items ${isOpen && 'open'}`}>
        <div className='header-container__items--title' onClick={handleClick}>
          <NavLink to='/'> HOME </NavLink>
        </div>
        <div className='header-container__items--title'  onClick={handleClick}>
          <NavLink to='/login'> Login </NavLink>
        </div>
        
        <div className='header-container__items--access'  onClick={handleClick}>
          <NavLink to='/login'>
            <BsFillPersonFill />
          </NavLink>
        </div>
        
      </div>

      <div
        className={`header-container--toggle ${isOpen && 'open'}`}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </>
    
  )
}

export default Header
