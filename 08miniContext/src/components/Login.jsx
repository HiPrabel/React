import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const userLogged = (e) => {
    e.preventDefault()
    setUser({username, password})
  }

  return (
    <div>
      <h2>Login</h2>
      <input 
      type="text" 
      placeholder='username' 
      value={username} 
      onChange={(e) => setUsername(e.target.value)}  />

      <input 
      type="text" 
      placeholder='password' 
      value={password} 
      onChange={(e) => setPassword(e.target.value)}  />
      
      <button 
      type="submit"
      onClick={userLogged}
      > Login </button>


    </div>
  )
}

export default Login