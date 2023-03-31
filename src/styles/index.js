import styled from "styled-components";

export const Image = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    z-index: ${props => (props.zIndex ? "100" : "0")}
`

export const Header = styled.h1`
    font-weight: 500;
    font-size: 3.3rem;
    line-height: 60px;
    text-align: center;
    &:hover {
        background-color: ${props => props.theme.white}
    }
`

export const Bold = styled.b`
    font-weight: 800;
`