import React, { useContext, useState } from 'react';
import CCompo from './CCompo';
import { ContextTitle } from './TestContext';

export default function BCompo() {

    const { title, changeTitle } = useContext(ContextTitle)

    return (
        <>
            <h1>B Component Title : {title}</h1>
            <button onClick={changeTitle} className="btn btn-primary btn-sm" >Click B</button>
            <CCompo />
        </>
    )
}
