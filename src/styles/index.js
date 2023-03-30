import styled from "styled-components";

export const Image = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    z-index: ${props => (props.zIndex ? "100" : "0")}
`

export const H1 = styled.span`
    font-weight: 500;
    font-size: 2.3rem;
    line-height: 50px;
`

export const Span = styled.span`
    font-weight: 700;
    font-size: 2.3rem;
`