import { createContext, useState } from "react";
import run from "../config/gemini";

// Create the context
const Context = createContext();

const ContextProvider = (props) => {
  // State for the input value
  const [input, setInput] = useState("");
  // State for the most recent prompt
  const [recentPrompt, setRecentPrompt] = useState("");
  // State for the list of previous prompts
  const [prevPrompts, setPrevPrompts] = useState([]);
  // State to show the result
  const [showResult, setShowResult] = useState(false);
  // State for loading status
  const [loading, setLoading] = useState(false);
  // State for the result data
  const [resultData, setResultData] = useState("");

  // Function to create a typing effect
  const typingEffect = (index, nextWord) => {
    setTimeout(() => {
      setResultData(prev => prev + nextWord);
    }, 75 * index);
  };

  // Function to handle the sending of a prompt
  const onSent = async (prompt) => {
    // Check if the input is empty and return if it is
    if (!prompt.trim()) return;  
    
    // Set loading to true
    setLoading(true);
    // Add the prompt to the list of previous prompts
    setPrevPrompts(prev => [...prev, prompt]);
    // Show the result section
    setShowResult(true);
    // Set the most recent prompt
    setRecentPrompt(input);
    // Clear previous result data
    setResultData(""); 

    try {
      // Send the prompt to the API and get the response
      const response = await run(prompt);

      // Process the response to add formatting
      let resArray = response.split('**');
      let newPrompt = '';
      for (let i = 0; i < resArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newPrompt += resArray[i];
        } else {
          newPrompt += '<b>' + resArray[i] + '</b>';
        }
      }
      // Replace '*' with line breaks and split by spaces for typing effect
      let newRes = newPrompt.split('*').join('</br>');
      let newResArray = newRes.split(' ');
      for (let i = 0; i < newResArray.length; i++) {
        const nextWord = newResArray[i];
        typingEffect(i, nextWord + ' ');
      }
    } catch (error) {
      // Log any errors
      console.error("Error running Gemini:", error); 
    } finally {
      // Set loading to false
      setLoading(false); 
      // Clear the input
      setInput("");
    }
  };

  // Define the context value
  const contextValue = {
    onSent,
    prevPrompts,
    setPrevPrompts,
    setRecentPrompt,
    recentPrompt,
    showResult,
    setShowResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    // Provide the context value to child components
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export { Context }; 
export default ContextProvider;