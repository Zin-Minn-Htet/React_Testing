import React from "react";
import CompoA from "./components/CompoA";
import CompoB from "./components/CompoB";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";

const theme = {
  colors: {
    primary: "blue",
    secondary: "hotpink",
    third: "gray"
  },
  size: {
    h1Size: "50px",
    h2Size: "30px"
  }
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <CompoA />
        <CompoB />
      </div>
    </ThemeProvider>
  )
}

export default App;
