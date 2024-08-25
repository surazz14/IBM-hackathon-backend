const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');
import HttpStatus from "http-status-codes";

// # Credentials
let API_KEY = process.env.WATSON_API_KEY
let SERVICE_URL = process.env.WATSON_SERVICE_URL
let ASSISTANT_ID = process.env.WATSON_ASSISTANT_ID

const assistant = new AssistantV2({
  version: '2023-06-15',
  authenticator: new IamAuthenticator({
    apikey: API_KEY,
  }),
  serviceUrl: SERVICE_URL,
});

// Function to create a session
async function createSession() {
  try {
    const session = await assistant.createSession({
      assistantId: ASSISTANT_ID,
    });
    return session.result.session_id;
  } catch (err) {
    console.error('Error creating session:', err);
    throw err;
  }
}

// Function to send a message
async function sendMessage(sessionId, message) {
  try {
    const watsonResponse = await assistant.message({
      assistantId: ASSISTANT_ID,
      sessionId: sessionId,
      input: {
        'message_type': 'text',
        'text': message,
      },
    });
    return watsonResponse.result.output.generic[0].text;
  } catch (err) {
    console.error('Error while sending message:', err);
    throw err;
  }
}


export const getResponse= async (req,res,next)=>{
  try{
      // Step 1: Create a session
      const sessionId = await createSession();
      console.log('Session ID:', sessionId);
  
      // Step 2: Send a message to the assistant
      const assistantResponse = await sendMessage(sessionId, req.body.message);
      console.log('Watson Assistant Response:', assistantResponse);
  
      // Step 3: Optionally, close the session when done
      await assistant.deleteSession({
        assistantId: ASSISTANT_ID,
        sessionId: sessionId,
      });
      console.log('Session closed.');
      return res.status(HttpStatus.OK).json({
        message: assistantResponse
      });
  }
  catch(err){
    next(err)
  }
  }