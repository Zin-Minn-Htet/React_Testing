import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { Container } from './styles/shares';
import { GlobalCSS } from "./styles/GlobalCSS";
import Home from "./components/Home";
import Login from "./components/Login";
import LoginContextProviter from "./store/LoginContext";
import RouteGuard from "./helper/RouteGuard";


const theme = {
  color: {
    primary: "aliceblue"
  }
}

function App() {
  return (
    <ThemeProvider theme={theme} >
      <GlobalCSS />
      <Container>
        <LoginContextProviter>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={
                <RouteGuard>
                  <Home />
                </RouteGuard>
              } />
            </Routes>
          </Router>
        </LoginContextProviter>
      </Container>
    </ThemeProvider>

  )
}

export default App;