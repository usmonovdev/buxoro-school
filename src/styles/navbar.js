import styled from "styled-components";

export const NavbarBox = styled.div`
    height: 60px;
    padding: 10px 0 10px 0;
    background: ${props => props.theme.white};
`

export const NavbarItems = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const Li = styled.li`
    list-style: none;
`