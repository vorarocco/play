import React from 'react'
import "./nav.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='nav-left'>
                <img className='nav-logo' src="/images/play_logo.png" alt="play-logo" />
                <Link to="/" className='link'>
                <span>Home</span>
                </Link>

                <Link to="/new" className='link'>
                <span>New</span>
                </Link>
                
                <Link to="/series" className='link'>
                <span>Series</span>
                </Link>

                <Link to="/movies" className='link'>
                <span>Movies</span>
                </Link>

                <Link to="/mylist" className='link'>
                <span>MyList</span>
                </Link>
            </div>

            <div className='nav-right'>
                <Link to="/admin" className='link'>
                <span>Admin</span>
                </Link>
            <SearchIcon className='icon'/>
            <NotificationsIcon className='icon'/>
            <ChildCareIcon className='icon'/>
            {/* <img className='icon' src="/images/icon_user.png" alt="kid" /> */}
            <img className='icon-img' src="/images/icon_user.png" alt="kid" />

            <div className='profile'>
                <MoreHorizIcon className='icon'/>
                <div className ='options'>
                    <Link to="/settings" className='link'>
                    <span>Settings</span>
                    </Link>

                    <Link to="/logout" className='link'>
                    <span>Logout</span>
                    </Link>

                </div>
            </div>

            </div>
            
        </div>
    </div>
  )
}

export default Nav