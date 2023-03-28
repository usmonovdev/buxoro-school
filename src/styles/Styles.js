import styled from "styled-components";

export const BoxStyle = styled.div`
    width: 400px;
    height: 400px;
    background: ${p => p.theme.body}
`

export const lightTheme = {
    body: '#f1f1f1',
    text: '#121620'
};

export const darkTheme = {
    body: '#121620',
    text: '#f1f1f1'
};