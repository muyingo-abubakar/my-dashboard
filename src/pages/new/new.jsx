import './new.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { useState } from 'react';

export default function New({ inputs, title }) {
  const [file, setFile] = useState('');
  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>{title} </h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'data:image/jpeg;base64,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'
              }
              alt=''
            />
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label htmlFor='file'>
                  Image: <DriveFolderUploadOutlined className='icon' />
                </label>
                <input
                  type='file'
                  id='file'
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </div>
              {inputs.map((input) => (
                <div className='formInput' key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              ;<button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
