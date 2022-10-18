import React, { useContext } from 'react';
import { ContextTitle } from './TestContext'; 

export default function CCompo() {

  const {title,changeTitle } = useContext(ContextTitle)

  return (
    <>
    <h1>C Component Title : {title}</h1>
    <button onClick={changeTitle}>Click C</button>
    </>
  )
}
