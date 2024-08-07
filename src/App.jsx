import { useState } from "react"


function App() {

  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(c => !c)
  }

  return (
    <>
    <div className="flex justify-center items-center h-[100vh]">
    <div className={!close ? " w-[500px] h-[500px] bg-slate-600 relative rounded-lg" : " w-[500px] h-[500px] bg-slate-600 relative rounded-lg hidden"}>
      <div onClick={handleClose} className="absolute right-[-15px] top-[-25px] bg-red-500 p-3 rounded-md text-white cursor-pointer hover:bg-red-700">X</div>
    </div>
    </div>
    </>
  )
}

export default App
