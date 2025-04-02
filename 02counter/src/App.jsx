import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(2)
  // let counter = 5

  const addValue = () => {
    if (counter === 5) {
      alert('counter maxxed out')
    } else {
      counter += 1
      setCounter(counter)
    }  
    console.log(counter);
  }

  // const addValue = () => {
  //   if (counter >= 3) {
  //     alert('counter maxxed out')
  //     setCounter((counter) = 5 )
  //   } else {
  //     counter += 1
  //     setCounter((counter) => counter+1 )
  //     setCounter((counter) => counter+1 )
  //     setCounter((counter) => counter+1 )
  //   }  
  //   console.log(counter);
  // }

  const removeValue = () => {
    if (counter === 0) {
      console.log('value cannot be negetive');
    } else {
      counter--
      setCounter(counter)
    }  
    console.log(counter);
  }

  return (
    <>
      <h1>Button Counter</h1>
      <h3>Counter: {counter}</h3>

      <button
      onClick={addValue}
      >Increase {counter}</button> <br /> <br />

      <button
      onClick={removeValue}
      >Decrease {counter}</button>
    </>
  )
}

export default App
