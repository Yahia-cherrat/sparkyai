
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Button from './components/Button'

const App = () => {
  return (
    <>
      <div className="fixed inset-0 bg-[#1b1b1b]/10 backdrop-blur-[150px] z-10">
        <Navbar/>
        <div className='flex align-center justify-between px-[8px]'>
          <Sidebar />
          <Button />
        </div>
      </div>
      <div className='relative overflow-hidden bg-[#1b1b1b] w-screen h-screen'>
        <div className='absolute bottom-0 left-0 transform -translate-x-16 translate-y-6 w-96 h-96 bg-[#EDBEC2] rounded-full blur-[70px]'></div>
        <div className='absolute top-16 right-0 w-60 h-60 bg-[#734DED] rounded-full -translate-x-96 blur-[30px]'></div>
        <div className='absolute bottom-0 right-0 transform translate-x-8 translate-y-8 w-40 h-40 bg-[#D950D8] rounded-full blur-[30px]'></div>
      </div>
    </>
  )
}
export default App;