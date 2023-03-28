import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Box from "./components/Box";
import Navbar from "./components/Navbar";
import { lightTheme, darkTheme } from './styles/Styles';

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const navbarProps = {
    setTheme, isDarkTheme
  }
  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Navbar {...navbarProps} />
        <Box />
      </ThemeProvider>
    </>
  );
}

export default App;
