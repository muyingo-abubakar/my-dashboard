import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function List() {
  const rows = [
    {
      id: 1143155,
      product: 'Mac book Pro',
      img: 'images/laptop.jpg',
      customer: 'Jibril Bira',
      date: '1 February',
      amount: 785,
      method: 'cash on Delivery',
      status: 'Approved'
    },

    {
      id: 2235235,
      product: 'Macbook Air',
      img: 'images/laptop.jpg',
      customer: 'Jalalu Kiraga',
      date: '1 March',
      amount: 900,
      method: 'online payment',
      status: 'Pending'
    },

    {
      id: 2342353,
      product: 'Dell I5',
      img: 'images/playstation.jpg',
      customer: 'Jazirah Nandujja',
      date: '1 April',
      amount: 920,
      method: 'cash on Delivery',
      status: 'Approved'
    },

    {
      id: 2357741,
      product: 'Lenovo',
      img: 'images/laptop.jpg',
      customer: 'Marisa Nandujja',
      date: '1 May',
      amount: 785,
      method: 'cash on Delivery',
      status: 'Approved'
    },

    {
      id: 2342355,
      product: 'IBM',
      img: 'images/pexels-lumn-399159.jpg',
      customer: 'Zaharah Nansimbe',
      date: '1 June',
      amount: 2000,
      method: 'online',
      status: 'pending'
    }
  ];

  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>
                <div className='cellWrapper'>
                  <img src={row.img} alt='' className='image' />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
