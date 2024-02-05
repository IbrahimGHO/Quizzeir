import React, { useState } from 'react';
import mammoth from 'mammoth';
import ChatGptComponent from './ChatGptComponent';
import Header from './Component/Header';
import Nofile from './Component/Nofile';

import { Fieldset } from 'primereact/fieldset';
const DocumentReader = () => {
  const [documentText, setDocumentText] = useState('');
  const [fileName, setFileName] = useState(null);
  
  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = async (e) => {
        const arrayBuffer = e.target.result;
        const result = await mammoth.extractRawText({ arrayBuffer });
        setDocumentText(result.value);
        setFileName(file ? file.name : 'No file chosen');
      };

      reader.readAsArrayBuffer(file);
    }
  
  };


  return (
    <div>
      <Header handleFileChange={handleFileChange} />
    <div className='file-input-container'>

        {/* <div className='pads'>
          <input type="file" id="fileInput" onChange={handleFileChange} />
          <label htmlFor="fileInput" className="custom-file-input">Choose File <UploadOutlined /> </label>
        </div> */}



      {fileName && <Fieldset unstyled  collapsed legend={fileName} toggleable>
      <p className='text' dangerouslySetInnerHTML={{ __html: documentText }} />
      </Fieldset>}
    </div>
    
    
    


      {!documentText && <Nofile/>}
      {documentText && <ChatGptComponent text={documentText} />}
    </div>
  );
};

export default DocumentReader;
