import React from 'react'
import "./nav.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';



const Nav = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='nav-left'>
                <img className='nav-logo' src="/images/play_logo.png" alt="play-logo" />
                <span>Home</span>
                <span>New</span>
                <span>Series</span>
                <span>Movies</span>
                <span>MyList</span>
            </div>

            <div className='nav-right'>
            <SearchIcon className='icon'/>
            <NotificationsIcon className='icon'/>
            <ChildCareIcon className='icon'/>
            {/* <img className='icon' src="/images/icon_user.png" alt="kid" /> */}
            <img className='icon-img' src="/images/icon_user.png" alt="kid" />

            <div className='profile'>
                <MoreHorizIcon className='icon'/>
                <div className ='options'>
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
            </div>

            </div>
            
        </div>
    </div>
  )
}

export default Nav