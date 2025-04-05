import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'

function App() {
  
  const [Password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [specialAllowed, setspecialAllowed] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numbersAllowed) {str += '0123456789'}
    if (specialAllowed) {str += '`~!@#$%^&*()_+-={}[]:"<>?,.'}

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numbersAllowed, specialAllowed, setPassword])
  

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, specialAllowed, passwordGenerator])


  const copyContent = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 51)
    window.navigator.clipboard.writeText(Password)
  }, [Password])
  
  

  return (
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-4 py-4 h-64 flex flex-col justify-between my-10 text-orange-500 bg-gray-700'>
      <h1 className='text-4xl  text-white text-center mb-4'>Password Generator</h1>
      
      <div className='flex shadow-lg rounded-lg overflow-hidden mb-4'>
        
        <input 
        type="text"
        value={Password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />

        <button
        className='outline-none bg-blue-700 text-white px-4 shrink-0'
        onClick={copyContent}
        >copy</button>

      </div>

      <div className='flex text-sm gap-x-2 justify-between'>
        <div className='flex items-center gap-x-2'>
          <input 
          type="range" 
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label htmlFor="Length">
            Length : {length}
          </label>
        </div>

        <div>
        <input 
        type="checkbox"  
        defaultChecked={numbersAllowed}
        className='mx-2'
        onChange={() => {
          setNumbersAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="numbers">Numbers</label>
        </div>

        <div>
        <input 
        type="checkbox"  
        defaultChecked={specialAllowed}
        className='mx-2'
        onChange={() => {
          setspecialAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="Special">Special </label>
        </div>

      </div>
    
      <input 
        type="text"
        className='outline-none w-full my-4 rounded-lg py-1 px-3'
        placeholder='Paste'
      />

    </div>
    
    
  )
}

export default App
