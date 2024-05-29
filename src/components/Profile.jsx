import {useContext} from 'react'
import userContext from '../context/UserContext'

function Profile() {
  const { user } = useContext(userContext)
  
  if (!user) return <div>Please Login first</div>

  else if (user.username == '') return <div>Kindly enter a valid username and password</div>
    
  else return <div>Welcome {user.username}</div>
  
}

export default Profile