import './barchart.scss';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function barchart() {
  const data = [
    {
      name: 'February',
      pv: 2400
    },
    {
      name: 'March',
      pv: 1398
    },
    {
      name: 'April',

      pv: 9800
    },
    {
      name: 'April',

      pv: 3908
    },
    {
      name: 'May',

      pv: 4800
    },
    {
      name: 'June',

      pv: 3800
    }
  ];

  return (
    <BarChart width={800} height={250} data={data} className='barChart'>
      <CartesianGrid strokeDasharray='3 3' className='chartGrid' />
      <XAxis dataKey='name' />
      <YAxis />
      <Bar dataKey='pv' fill='#8884d8' />
      <BarChart dataKey='uv' fill='#82ca9d' />
    </BarChart>
  );
}
