import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreator } from "./stores/actionCreator";



function App() {

  const logined = useSelector(state => state.login);
  const dispatch = useDispatch();
  const {login,logout} = bindActionCreators(actionCreator,dispatch);

  return (
    <div>
      <h1> {logined ? "Member" : "Guest"} </h1>
      <button onClick={() => login(true)}>login</button>
      <button onClick={() => logout(false)}>logout</button>
    </div>
  )
}

export default App;