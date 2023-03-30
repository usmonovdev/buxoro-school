import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Connect, Courses, Home, Navbar, Register } from "./constants";
import { Container } from "./styles/container";
import { GlobalStyle, lightTheme } from "./styles/globalStyle";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Navbar />
        <Container>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/sign-up" element={<Register />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
