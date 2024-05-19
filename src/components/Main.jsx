import Button from "./Button";
import Navbar from "./Navbar";
import Input from "./Input";
import sparkyaiLogo from "../assets/sparkyaiLogo.png";
import { useContext } from "react";
import { Context } from "../context/Context";

const Main = ({ isSidebarOpen, toggleSidebar }) => {
  // Accessing necessary states and functions from the context
  const { recentPrompt, showResult, setShowResult, loading, resultData } = useContext(Context);

  // Function to handle starting a new chat
  const startNewChat = () => {
    setShowResult(false);
  }

  return (
    // Main container with conditional classes based on sidebar open state
    <div className={`flex flex-col w-full p-4 ${isSidebarOpen ? '' : ''}`}>
      {/* Navbar component */}
      <div className="flex items-start">
        <Navbar />
      </div>
      {/* Container for buttons with transition effects */}
      <div className="flex items-center justify-between transition-all my-4">
        {/* Button to toggle sidebar */}
        <Button onClick={toggleSidebar}>
          {!isSidebarOpen ? 
            <svg
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H19M2 8H10.5M2 14H6.25"
                stroke="white"
                strokeWidth="2.76463"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            :
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 1L13 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        </Button>
        {/* Button to start a new chat */}
        <Button onClick={startNewChat}>Start a new chat</Button>
      </div>
      {/* Main content area */}
      <div className="flex-grow flex items-center justify-center relative my-4">
        <div className="grid place-items-center w-full h-full">
          {/* Conditional rendering based on showResult state */}
          {!showResult ?
            // Displayed when showResult is false
            <div className="my-4 grid place-items-center">
              <div className="flex flex-col items-center">
                <img src={sparkyaiLogo} alt="sparkyLogo" className="w-32" />
                <h2 className="text-xl text-[#f4f4f5] mt-2">How can I help you today?</h2>
              </div>
            </div>
            :
            // Displayed when showResult is true
            <div className="relative w-full h-full text-[#f4f4f5]">
              <div className="absolute bottom-0 p-2 max-h-full overflow-y-auto w-full custom-scrollbar">
                <h1 className="mb-2 text-base font-medium">{recentPrompt}</h1>
                {/* Loading animation when data is being fetched */}
                {loading ? (
                  <div className="w-full flex flex-col gap-3 animate-pulse">
                    <hr className="rounded-md border-0 bg-[#f6f7f8] h-3 bg-custom-gradient" />
                    <hr className="rounded-md border-0 bg-[#f6f7f8] h-3 bg-custom-gradient" />
                  </div>
                ) : (
                  // Result data
                  <p className="text-sm font-light text-justify" dangerouslySetInnerHTML={{__html:resultData}}></p>
                )}
              </div>
            </div>
          }
        </div>
      </div>
      {/* Input component for user input */}
      <Input />
    </div>
  );
};

export default Main;
