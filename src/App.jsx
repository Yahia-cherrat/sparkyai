import { useState } from "react";
import Sidebar from "./components/Sidebar";
import bg from "./assets/bg.png";
import Main from "./components/Main";
import ContextProvider from "./context/Context";

const App = () => {
  // State to control whether the sidebar is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar open/close state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen" style={{ backgroundImage: `url(${bg})` }}>
      <ContextProvider>
        {/* Sidebar component */}
        <Sidebar isOpen={isSidebarOpen} />
        
        {/* ContextProvider component to provide context to Main */}
        <Main 
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </ContextProvider>
    </div>
  );
};

export default App;