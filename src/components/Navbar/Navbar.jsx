import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

export default function Navbar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='search...' />
          <SearchIcon className='icon' />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageIcon className='icon' />
            English
          </div>
          <div className='item'>
            <NightlightOutlinedIcon
              className='icon'
              onClick={() => dispatch({ type: 'TOGGLE' })}
            />
          </div>
          <div className='item'>
            <NightlightOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <NotificationsOutlinedIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <FormatListBulletedOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <img src='images/navimg.JPG' className='navimg' />
          </div>
        </div>
      </div>
    </div>
  );
}
