import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Widget from '../../components/widget/widget';
import Featured from '../../components/featured/featured';
import Charts from '../../components/charts/chart';
import Table from '../../components/table/Table';
import Barchart from '../../components/barchart/barchart';
import './home.scss';

export default function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>
        <Barchart />
        <div className='charts'>
          <Charts title='Last 6 Months (Revenue)' aspect={2 / 1} />
          <Featured />
        </div>
        <div className='listContainer'>
          <div className='listTitle'>Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
}
