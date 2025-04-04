import { useState } from 'react'

function App() {

  const [color, setColor] = useState("brown")

  return (

    // basic logic
    // <>
    //   <div className='w-full h-screen duration-200' 
    //   style={{backgroundColor: color}}>
    //     <button
    //     onClick={() => setcolor('green')}
    //     >Green</button>
    //     <br />
    //     <button
    //     onClick={() => setcolor('red')}
    //     >Red</button>
    //     <br />
    //     <button
    //     onClick={() => setcolor('yellow')}
    //     >Yellow</button>
    //   </div>
    // </>

    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}>
      <div className='fixed bottom-24 flex flex-wrap justify-center px-3 rounded-3xl inset-x-0 m-2'> 
        <div className='bg-white flex flex-wrap justify-center gap-3 shadow-xl px-5 rounded-3xl'>
          <button 
          onClick={() => setColor('white')}
          className='outline-none shadow-lg border-black border px-4 py-1 rounded-2xl my-1' style={{backgroundColor: 'white'}} > White</button>
          <button 
          onClick={() => setColor('red')}
          className='outline-none shadow-lg text-white rounded-2xl my-1 px-4 py-1' style={{backgroundColor: 'red'}} > Red</button>
          <button 
          onClick={() => setColor('black')}
          className='outline-none shadow-lg text-white px-4 py-1 rounded-2xl my-1' style={{backgroundColor: 'black'}} > Black</button>
          <button 
          onClick={() => setColor('blue')}
          className='outline-none shadow-lg text-white px-4 py-1 rounded-2xl my-1' style={{backgroundColor: 'blue'}} > Blue</button>
          <button 
          onClick={() => setColor('yellow')}
          className='outline-none shadow-lg px-4 py-1 rounded-2xl my-1' style={{backgroundColor: 'yellow'}} > Yellow</button>
          <button 
          onClick={() => setColor('green')}
          className='outline-none shadow-lg px-4 py-1 rounded-2xl my-1' style={{backgroundColor: 'green'}} > Green</button>
        </div>
      </div>
    </div>
   
  )
}

export default App
