import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

export default function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>Admin</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <Link to='/users/new' style={{ textDecoration: 'none' }}>
            <li>
              <ProductionQuantityLimitsIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <AssessmentIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>PROFILE</p>
          <li>
            <AccountCircleOutlinedIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'LIGHT' })}></div>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'DARK' })}></div>
      </div>
    </div>
  );
}
