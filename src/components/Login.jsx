import React, { useState, useContext } from 'react'
import userContext from '../context/UserContext'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const {setUser}=useContext(userContext)

  function submitVal(e) {
    e.preventDefault()
    setUser({username,password})//this send the values to the 'user' state variable which is in userContext

  }
 
  return (
    <div>
      <input type="text" placeholder='userName'
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}}  
      />
      {"  "}
      <input type="text" placeholder='password'
        value={password}
        onChange={(e) => { setPassword(e.target.value) }}
      />
      {"    "}
      <button onClick={submitVal}>Submit</button>
    </div>
  )
}

export default Login