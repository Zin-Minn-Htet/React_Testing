import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from '../store/actionCreators';



export default function Zcompo() {
    const account = useSelector(state => state.account);
    const dispatch = useDispatch();
    const {add, remove} = bindActionCreators(actionCreators,dispatch)
  return (
    <div>
        <h1>Z Compo</h1>
        <h4>{account}</h4>
        <button onClick={() => add(100)}>Add*2</button>
        <button onClick={() => remove(100)}>Remove*2</button>
    </div>
  )
}
