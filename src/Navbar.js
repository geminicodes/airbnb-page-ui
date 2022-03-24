import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
          <Link to='/'>
            <img
              className="navbar__icon"
              src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
              alt=""
            />
          </Link>

          <div className='navbar__center'>
            <input type="text" placeholder='Search'/>
            <SearchIcon />
          </div>

          <div className='navbar__right'>
            <h4>Become a host</h4>
            <div className='navbar__rightGlobe'>
              <LanguageIcon />
              <ExpandMoreIcon />
            </div>
            <div className='navbar__rightAvatar'>
              <MenuIcon />
              <Avatar />
            </div>
          </div>
        </div>
    );
}

export default Navbar;
