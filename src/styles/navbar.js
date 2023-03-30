import styled from "styled-components";
import { Small } from "./breakpoints";

export const NavbarBox = styled.div`
    height: 60px;
    padding: 10px 0 10px 0;
    background: ${props => props.theme.white};
    display: flex;
    align-items: center;
`

export const NavbarLarge = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${Small}) {
        display: none;
    }
`

export const NavbarSmall = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: ${Small}) {
        display: none;
    }
`

export const UlLarge = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`

export const UlSmall = styled.ul`
    position: absolute;
    top: 0;
    right: 0;
    width: 60vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 70px 0 0 0;
    padding: 0;
    background: ${props => props.theme.blue}
`

export const Li = styled.li`
    list-style: none;
`