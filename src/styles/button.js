import styled from "styled-components";

export const Button = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    background: ${props => props.theme.orange};
    text-transform: ${props => props.textTransform};
    border: none;
    cursor: pointer;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
    border-radius: 20px;
    color: white;
    box-shadow: -6px 4px 20px -1px rgba(34, 60, 80, 0.2);
    transition: 200ms;
    &:hover {
        box-shadow: -6px 4px 20px -1px rgba(34, 60, 80, 0.3);
        filter: brightness(0.8);
    }
`