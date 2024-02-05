import  {UploadOutlined } from '@ant-design/icons';

function Header({ handleFileChange }) {
  return (
    <header className="app-header">
    <h1 className="app-title">Quizzier</h1>

    <div className='pads'>
          <input type="file" id="fileInput" onChange={handleFileChange} />
          <label htmlFor="fileInput" className="custom-file-input">Choose File <UploadOutlined /> </label>
        </div>

  </header>
  );
}

export default Header;