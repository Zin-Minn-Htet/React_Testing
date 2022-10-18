import React from 'react'
import ACompo from './components/ACompo';
import BCompo from './components/BCompo';
import ContextTitleProvider from './components/TestContext';

function App() {

  const H1_Style = {
    color: "red"
  }

  return (
    <ContextTitleProvider>
      <div>
        <h1 style={H1_Style}>Api Context</h1>
        <ACompo />
        <BCompo />
      </div>
    </ContextTitleProvider>
      )
}

export default App;