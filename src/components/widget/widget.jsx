import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import './widget.scss';

export default function widget({ type }) {
  let data;

  //temporary Amount
  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'see all users',
        icon: (
          <PersonOutlineIcon
            className='icon'
            style={{
              backgroundColor: 'rgba(225, 0, 0, 0.2)',
              color: 'crimson'
            }}
          />
        )
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'view all orders',
        icon: (
          <ShoppingCartOutlinedIcon
            className='icon'
            style={{
              backgroundColor: 'rgba(218, 165, 32, 0.2)',
              color: 'goldenrod'
            }}
          />
        )
      };
      break;
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'view net earnings',
        icon: (
          <MonetizationOnOutlinedIcon
            className='icon'
            style={{
              backgroundColor: 'rgba(0, 128, 0, 0.2)',
              color: 'green'
            }}
          />
        )
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: false,
        link: 'see details',
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className='icon'
            style={{
              backgroundColor: 'rgba(128,0,128,0.2)',
              color: 'purple'
            }}
          />
        )
      };
      break;
    default:
      break;
  }
  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && '$'}
          {amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
}
