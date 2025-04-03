import './App.css'
import Card from './components/Card'

function App() {
  
  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl shadow-sm shadow-white mb-6'>Tailwind Test</h1>
      <Card />
      <Card transaction={87}/>
      <Card transaction={23} asset={121} user={44}/>

    </>
  )
}

export default App
