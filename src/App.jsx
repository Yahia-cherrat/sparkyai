import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import sparkyaiLogo from "./assets/sparkyaiLogo.png";
import Input from "./components/Input";

const App = () => {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col">
        <div className="fixed inset-0 bg-[#1b1b1b]/10 backdrop-blur-[130px] z-0 p-4 h-screen flex flex-col">
          <div className="flex items-start">
            <Navbar />
          </div>
          <div className="flex items-center justify-between transition-all my-4">
            <Button>
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
            </Button>
            <Button>Start a new chat</Button>
          </div>
          <div className="flex-grow flex items-center justify-center">
            <div className="my-4 grid place-items-center">
              <div className="flex flex-col items-center">
                <img src={sparkyaiLogo} alt="sparkyLogo" className="w-32" />
                <h2 className="text-xl text-[#f4f4f5] mt-2">How can I help you today?</h2>
              </div>
            </div>
          </div>
          <Input />
        </div>

        {/* Blur-background */}
        <div className="relative overflow-hidden bg-[#1b1b1b] w-screen h-screen -z-10">
          <div className="absolute bottom-0 left-0 transform -translate-x-16 translate-y-6 w-96 h-96 bg-[#EDBEC2] rounded-full blur-[70px]"></div>
          <div className="absolute top-16 right-0 w-60 h-60 bg-[#734DED] rounded-full -translate-x-96 blur-[30px]"></div>
          <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8 w-40 h-40 bg-[#D950D8] rounded-full blur-[30px]"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
