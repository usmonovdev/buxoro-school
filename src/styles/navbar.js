import styled, { keyframes } from "styled-components";
import { ExtraSmall, Small } from "./breakpoints";

export const NavbarBox = styled.div`
    position: sticky;
    top: 0;
    width: 100vw;
    height: 60px;
    padding: 10px 0 10px 0;
    background: ${props => props.theme.white};
    display: flex;
    align-items: center;
    box-shadow: 0px 8px 20px 0px rgba(34, 60, 80, 0.2);
    transform: ${props => (props.top ? "translateY(-80px)" : "translateY(0)")};
    transition: 200ms;
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
export const UlBox = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0;
    padding: 0;
    background: ${props => props.theme.blkTransparent};
`

const translate = keyframes`
    from {
        opacity: 0.4;
        transform: scaleX(0.7)
    }

    to {
        opacity: 1;
        transform: scaleX(1)
    }
`

export const UlDetails = styled.div`
    position: absolute;
    right: 0;
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: ${props => props.theme.blue};
    animation: ${translate} 150ms linear both;
    transform-origin: right;
    @media (max-width: ${ExtraSmall}) {
        width: 100%;
    }
`

export const UlSmall = styled.ul`
    position: relative;
    top: 80px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: ${props => props.theme.white};
    padding: 0 30px 0 30px;
`

export const Li = styled.li`
    list-style: none;
`