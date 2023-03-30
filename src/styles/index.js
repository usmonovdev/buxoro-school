import styled from "styled-components";

export const Image = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    z-index: ${props => (props.zIndex ? "100" : "0")}
`