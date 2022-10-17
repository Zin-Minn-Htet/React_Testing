import React from 'react';
import ReactDOM from 'react-dom';

export default function Acompo() {
  return ReactDOM.createPortal (
    <>
      <h1>Hello A</h1>
      <h2>OK par</h2>
    </>,
    document.getElementById("portal")
  )
}
