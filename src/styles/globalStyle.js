import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: ${props => props.theme.body};
        font-family: 'Raleway', sans-serif;
        font-size: 1.1rem;
    };
    .link {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 500;
        color: ${props => props.theme.black};
        &:active {
            color: unset;
        }
    };
    .hamburger-react {
        z-index: 100;
    };
    ::-webkit-scrollbar {
        display: none;
    }
`

export const lightTheme = {
    body: '#fff6f1',
    orange: '#9c7123',
    blue: "#003555",
    white: "#f5efe3",
    black: "#160f01",
};

export const darkTheme = {};