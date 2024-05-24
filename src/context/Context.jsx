import { createContext, useState, useEffect } from "react";
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

  useEffect(() => {
    // Load prompts from localStorage on component mount
    const storedPrompts = localStorage.getItem("prevPrompts");
    if (storedPrompts) {
      setPrevPrompts(JSON.parse(storedPrompts));
    }
  }, []);

  useEffect(() => {
    // Save prompts to localStorage whenever prevPrompts changes
    localStorage.setItem("prevPrompts", JSON.stringify(prevPrompts));
  }, [prevPrompts]);

  // Function to create a typing effect
  const typingEffect = (index, nextWord) => {
    setTimeout(() => {
      setResultData(prev => prev + nextWord);
    }, 75 * index);
  };

  // Function to handle the sending of a prompt
  const onSent = async (prompt, addToHistory = true) => {
    // Check if the input is empty and return if it is
    if (!prompt.trim()) return;  
    
    // Set loading to true
    setLoading(true);

    // Only add to history if addToHistory is true
    if (addToHistory) {
      setPrevPrompts(prev => {
        const updatedPrompts = [...prev, prompt]; // Add the prompt to the list of previous prompts
        console.log("Updated prevPrompts:", updatedPrompts);
        return updatedPrompts;
      });
    }

    // Show the result section
    setShowResult(true);
    // Set the most recent prompt
    setRecentPrompt(prompt);
    // Clear previous result data
    setResultData("");

    try {
      // Send the prompt to the API and get the response
      const response = await run(prompt);
      // Handle bold text using regex
      let newPrompt = response.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      // Handle new lines
      newPrompt = newPrompt.replace(/\*\*/g, "<br/>");
      // Split the response into words for the typing effect
      let newResArray = newPrompt.split(' ');
      // Clear previous result before starting typing effect
      setResultData("");
      newResArray.forEach((word, index) => typingEffect(index, word));
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

  const reloadPrompt = async (prompt) => {
    await onSent(prompt, false); // Call onSent without adding to history
  };

  // Define the context value
  const contextValue = {
    onSent,
    reloadPrompt,
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