import React, { useState } from 'react';
import mammoth from 'mammoth';
import ChatGptComponent from './ChatGptComponent';
import Nofile from './Component/Nofile';


const DocumentReader = () => {
  const [documentText, setDocumentText] = useState('');
  const [fileName, setFileName] = useState('No file chosen');
  
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
    <div className='pads'>
    <div className='file-input-container'>

      <input type="file" id="fileInput" onChange={handleFileChange} />
      <label htmlFor="fileInput" className="custom-file-input">Choose File</label>
      <span className="file-label">{fileName}</span>
      </div>
    </div>
    
      <div className='text' dangerouslySetInnerHTML={{ __html: documentText }} />
      {!documentText && <Nofile />}
      {documentText && <ChatGptComponent text={documentText} />}
    </div>
  );
};

export default DocumentReader;