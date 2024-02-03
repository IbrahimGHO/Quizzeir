import React from 'react';

import { Message } from 'primereact/message';
import {FileTextOutlined} from '@ant-design/icons'
const Nofile = () => {
    return (
        <div className="no-file-chosen-message">
          <div>
          <FileTextOutlined style={{ fontSize: '100px' ,margin:'5px', color:"#f2f2f2",padding:'5px'} }/>
          </div>
          <Message text="Please select A Docx or Doc file " severity="info" style={{color:"#f2f2f2"}} />
        </div>
      );
};

export default Nofile;
