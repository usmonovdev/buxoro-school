import styled from "styled-components";

function App() {
  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: ${(props) => props.background};
    padding: ${(props) => props.padding};
    &:hover {
      background: #000
    }
  `
  const Title = styled.h1`
    color: black
  `
  return (
    <>
    <Wrapper background="#ddd" padding="0 0 0 10px">
      <Title>
        Hello World
      </Title>
    </Wrapper>
    </>
  );
}

export default App;
