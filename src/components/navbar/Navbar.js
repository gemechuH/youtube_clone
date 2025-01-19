import React from 'react'
import "./Navbar.css";
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import  more_icon from '../../assets/more.png'
import Notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom';



const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt="menu"
        />
        <Link to='/ '>
          
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="search" />
          <img src={search_icon} alt="search" />
        </div>
      </div>

      <div className="nav-right flex-dev">
        <img src={upload_icon} alt="uploadicon" />
        <img src={more_icon} alt="moreicon" />
        <img src={Notification_icon} alt="notifaction" />
        <img src={profile_icon} alt="profilephoto" className="user-icon" />
      </div>
    </nav>
  );
}

export default Navbar
