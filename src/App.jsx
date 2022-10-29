import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AppRouter from "./AppRouter";
import GlobalStyle from "./Styled/global";
import light from "./Styled/Themes/light";


function App() {

  const [theme, setTheme] = useState(light)

  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
