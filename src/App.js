import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Acompo from "./components/Acompo";
import { actionCreators } from './store/actionCreators';

function App() {
  const account = useSelector(state => state.account);
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const { add, remove, drop, inset } = bindActionCreators(actionCreators, dispatch);
  const nameRef = useRef();
  const phoneRef = useRef();
  const addUser = (e) => {
    e.preventDefault();
    let user = {
      name: nameRef.current.value,
      phone: phoneRef.current.value
    }
    inset(user)
    nameRef.current.value = "";
    phoneRef.current.value = ""
  }


  return (
    <div>
      <h1>{account}</h1>
      <button onClick={() => add(50)}>Add</button>
      <button onClick={() => remove(50)}>Remove</button>
      {
        user.map(u => <p onClick={() => drop(user)} > {u.name}  {u.phone} </p>)
      }
      <form onSubmit={addUser}>
        <input type="phone" ref={phoneRef} />
        <br></br>
        <br></br>
        <input type="name" ref={nameRef} />
        <button type="submit">addUser</button>
      </form>
      <Acompo />
    </div>
  )
}

export default App;