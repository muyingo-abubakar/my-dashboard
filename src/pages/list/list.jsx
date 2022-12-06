import './list.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';
export default function List() {
  return (
    <div className='list'>
      <Sidebar />
      <div className='listContainer'>
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
}
