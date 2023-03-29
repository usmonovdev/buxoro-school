import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import { Container } from "./styles/container";
import { GlobalStyle, lightTheme } from "./styles/globalStyle";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Navbar />
        <Container>
          <GlobalStyle />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
