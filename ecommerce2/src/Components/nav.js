import './nav.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import menu from '.././images/menu.svg';
import logo from '.././images/B-Kicks.svg';

function NavList() {

  const [showDropdown, setShowDropdown] = useState('item');

  const toggleNav = () => {
    setShowDropdown(showDropdown === 'item' ? 'item-active' : 'item');
  }

return(
     <nav className='header'>
        <ul className='menu-main'>
        <li className='logo-container-nav'><img className='logo' src={logo} alt="logo" /></li>
           <li className={showDropdown}><Link to='/'>Home</Link></li>
           <li className={showDropdown}><Link to='/sneakers'>Sneakers</Link></li>
           <li className={showDropdown}><Link to='/about'>About</Link></li>
           <li id='dropdown-bottom' className={showDropdown}><Link to='/login'>Account</Link></li> 
       
          <li className='bars' onClick={toggleNav}><img className='menu' src={menu} alt="menu" /></li>
        </ul>
     </nav>
)}
export default NavList;
