import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: ${props => props.theme.body};
        font-family: 'Raleway', sans-serif;
    }
`

export const lightTheme = {
    body: '#fff6f1',
    orange: '#ffae5f',
    blue: "#003555",
    white: "#f5efe3"
};

export const darkTheme = {};