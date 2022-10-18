import React, { useState } from 'react';
import Adduser from './components/Adduser';
import Useradd from './components/Useradd'

function App() {

  const [user, setUser] = useState({})

  const addUserHandler = (newUser) => {
    setUser((previous) => {
      console.log(previous)
      return ({
        name: newUser.name,
        password: newUser.password
      })
    })
  }

  return (
    <div className='container'>
      <h1>User name :{user.name} </h1>
      <h1>Password : {user.password} </h1>
      <Adduser addUser= {addUserHandler}/>
      {/* <Useradd addUser={addUserHandler } /> */}
    </div>
  )
}

export default App;
