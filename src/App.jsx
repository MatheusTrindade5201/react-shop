import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AppRouter from "./AppRouter";
import { MyContextProvider } from "./Context/MyContext";
import GlobalStyle from "./Styled/global";
import dark from "./Styled/Themes/dark";
import light from "./Styled/Themes/light";


function App() {

  const [theme, setTheme] = useState(dark);
  const [ cart, setCart ] = useState(sessionStorage.length)

  return (
    <MyContextProvider value={{theme, setTheme, cart, setCart}}>
      <ThemeProvider theme={theme} >
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </MyContextProvider>
  )
}

export default App
