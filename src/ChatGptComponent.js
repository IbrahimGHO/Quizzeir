// ChatGptComponent.js
import React, { useState } from 'react';
import callGpt3Api from './CallAI';
import QnAComponent from './QnAComponent';
import Nofile from './Component/Nofile';

import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner'; // Import ProgressSpinner from PrimeReact


        
const ChatGptComponent = ({ text }) => {
  const [gptResponse, setGptResponse] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state

  const handleGptCall = async () => {
    try {
      setLoading(true); // Set loading to true when making the API call
      console.log("calling...")
      const response = await callGpt3Api(text);
      setGptResponse(response);
    } catch (error) {
      console.error('Error calling GPT-3 API:', error);
    } finally {
      setLoading(false); // Set loading back to false after the API call is completed
    }
  };

  return ( 
    <div>
      <Button className='big-button' label="Generate Questions & Answers" severity='Primary' onClick={handleGptCall}/>
      {loading && <ProgressSpinner style={{margin:'20px' , width: '100px', height: '100px' }}/>} {/* Show loading indicator while loading */}
      {gptResponse && (
        <div>
          {gptResponse && <QnAComponent text={gptResponse} />}
          {!gptResponse && <Nofile />}
        </div>
      )}
    </div>
  );
};

export default ChatGptComponent;
