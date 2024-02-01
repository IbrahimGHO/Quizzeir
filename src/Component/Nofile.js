import React from 'react';

import { Message } from 'primereact/message';

const Nofile = () => {
    return (
        <div className="no-file-chosen-message">
          <Message text="No file chosen yet" severity="info"/>
        </div>
      );
};

export default Nofile;
