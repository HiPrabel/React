import { useState } from 'react'
import './App.css'
import { ThemeContext, ThemeProvider } from './context/Theme'
import { useEffect } from 'react'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'


function App() {
  //compare prev project for better understanding
  const [themeMode, setThemeMode] = useState('light')
  
  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  // actual logic

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap bg-gray-600 min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
