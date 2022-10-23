import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {login,logout} from './stores/actions'




function App() {

  const logined = useSelector(state => state.login);
  const dispatch = useDispatch();

  return (
    <div>
      <h1> {logined ? "Member" : "Guest"} </h1>
      <button onClick={() => dispatch(login(true))}>login</button>
      <button onClick={() => dispatch(logout(false))}>logout</button>
    </div>
  )
}

export default App;