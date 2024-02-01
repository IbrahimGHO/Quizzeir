const callGpt3Api = async (text) => {
  const API_KEY = process.env.REACT_APP_API_KEY; 



  const prompt = `Generate question and answers in the form of Q: for questions and A: for answers for the following text:\n\n${text}`;
  const API_body={
    model: 'gpt-3.5-turbo',
    messages: [ { role: 'user', content: prompt }],
    max_tokens: 500,
    temperature: 0.7,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(API_body),
    });

    const responseData = await response.json();
    
    console.log(responseData)
    // const msg =responseData.choices[0].message.content;
    // const jsonq = textToJSON(msg)
    // console.log(jsonq)

    return responseData.choices[0].message.content;


  } catch (error) {
    console.error('Error calling GPT-3 API:', error);
  }

};

// function textToJSON(inputText) {
//   const qnaPairs = inputText.split('\n\n');
//   const result = {};

//   qnaPairs.forEach((pair, index) => {
//       const match = pair.match(/Q: (.+?)\s+A: (.+)/s);
//       if (match) {
//           const question = match[1].trim();
//           const answer = match[2].trim();
//           result[`q${index + 1}`] = { question, answer };
//       }
//   });

//   return result;
// }



export default callGpt3Api;
