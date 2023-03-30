import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: ${props => props.theme.body};
        font-family: 'Raleway', sans-serif;
        font-size: 1.1rem;
        overflow-x: hidden;
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
    .link-small {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 500;
        color: ${props => props.theme.black};
        background: ${props => props.theme.body};
        border-radius: 10px;
        &:active {
            color: ${props => props.theme.black};
        }
    };
    .hamburger-react {
        z-index: 100;
    };
    ::-webkit-scrollbar {
        width: 5px;
    };
    ::-webkit-scrollbar-track {
        background: ${props => props.theme.white};
    };
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.orange};
        border-radius: 10px;
    };
`

export const lightTheme = {
    body: '#fff6f1',
    orange: '#9c7123',
    blue: "#003555",
    white: "#f5efe3",
    black: "#160f01",
    blkTransparent: "#2b1d05bf",
};

export const darkTheme = {};