import { useContext } from "react";
import { Context } from "../context/Context";

const Sidebar = ({ isOpen }) => {
  // Accessing prevPrompts state from the context
  const { prevPrompts } = useContext(Context);

  return (
    // Sidebar container with conditional classes based on isOpen state
    <div className={`h-screen bg-[#180C21]/70 px-5 py-6 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* Title for chat history */}
      <p className="text-base text-[#f4f4f5] mb-5">Chat history</p>
      {/* List of previous prompts */}
      <ul>
        {prevPrompts.map((item, index)=>{
          return (
            // List item for each previous prompt
            <li key={index} className="text-sm text-[#f4f4f5] font-thin p-1 mb-2 rounded-[5px] hover:bg-[#351C48] cursor-pointer transition-all">{item}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
