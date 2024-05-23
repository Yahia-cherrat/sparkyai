import { useContext, useEffect } from "react";
import { Context } from "../context/Context";

const Sidebar = ({ isOpen }) => {
  const { prevPrompts } = useContext(Context);

  useEffect(() => {
    console.log("prevPrompts in Sidebar:", prevPrompts);
  }, [prevPrompts]);

  return (
    // Sidebar container with conditional classes based on isOpen state
    <div className={`h-screen bg-[#180C21]/70 ${isOpen ? 'px-5 py-6 w-72' : 'p-0 overflow-hidden m-0 w-0'} transition-all duration-300`}>
      {/* Title for chat history */}
      <p className="text-base text-[#f4f4f5] mb-5">Chat history</p>
      {/* List of previous prompts */}
      <ul>
        {prevPrompts.length === 0 
        ? 
        <li className="text-sm text-[#f4f4f5] font-thin p-1 mb-2">No prompts yet.</li>
        : 
        prevPrompts.map((item, index)=>{
          // console.log(item);
          return (
            // List item for each previous prompt
            <li key={index} className="text-sm text-[#f4f4f5] font-thin p-1 mb-2 rounded-[5px] hover:bg-[#351C48] cursor-pointer transition-all">{item.slice(0, 27)} ...</li>
          )
        })}
      </ul>
    </div>
  );
};

export default Sidebar;