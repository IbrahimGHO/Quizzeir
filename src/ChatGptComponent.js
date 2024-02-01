// ChatGptComponent.js
import React, { useState } from 'react';
import callGpt3Api from './CallAI';
import QnAComponent from './QnAComponent';
import Nofile from './Component/Nofile';

import { Button } from 'primereact/button';
        
const ChatGptComponent = ({ text }) => {
  const [gptResponse, setGptResponse] = useState('');

  const handleGptCall = async () => {
    try {
        console.log("calling...")
      const response = await callGpt3Api(text);
      setGptResponse(response);
    } catch (error) {
      console.error('Error calling GPT-3 API:', error);
     
    }
  };

  return ( 
    <div >

      <Button className='big-button' label="Generate Questions & Answers" severity='Primary' onClick={handleGptCall}/>
      {gptResponse && (
        <div className='App'>
          {/* <p>GPT-3 Response:</p> */}
          {/* <p>{gptResponse}</p> */}
          
          {gptResponse && <QnAComponent text={gptResponse} />}
          {!gptResponse && <Nofile />}

        </div>
      )}
    </div>
  );
};

export default ChatGptComponent;
