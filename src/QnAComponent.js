import { Card } from 'primereact/card';
import React, { useState } from 'react';
import { Button } from 'primereact/button';

import './App.css';

const QnAComponent = ({ text }) => {
  const textToJSON = (inputText) => {
    const qnaPairs = inputText.split('\n\n');
    const result = {};

    qnaPairs.forEach((pair, index) => {
      const match = pair.match(/Q: (.+?)\s+A: (.+)/s);
      if (match) {
        const question = match[1].trim();
        const answer = match[2].trim();
        result[`q${index + 1}`] = { question, answer };
      }
    });

    return result;
  };

  const jsonQnA = textToJSON(text);

  // State to manage the visibility of answers
  const [showAnswers, setShowAnswers] = useState({});

  // Function to toggle the visibility of an answer
  const toggleAnswerVisibility = (key) => {
    setShowAnswers((prevShowAnswers) => ({
      ...prevShowAnswers,
      [key]: !prevShowAnswers[key],
    }));
  };

  return (
    <div >
      {Object.keys(jsonQnA).map((key) => (
        <div key={key}>
          <Card title={jsonQnA[key].question} className='cardStyle'>
            <p style={{ display: showAnswers[key] ? 'block' : 'none' }}>
              {jsonQnA[key].answer}
            </p>
          
            <Button label="Show Answer" onClick={() => toggleAnswerVisibility(key)} text />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default QnAComponent;
