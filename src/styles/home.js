import styled from "styled-components";
import { Small } from "./breakpoints";

export const HomeBox = styled.div`
    position: relative;
    top: 80px;
    width: 100%;
    height: 100%;
    border: 2px solid red;
    display: flex;
    flex-direction: row;
    @media (max-width: ${Small}) {
        display: flex;
        flex-direction: column;
    };
`

export const HomeRight = styled.div`
    width: 40%;
    height: 100%;
    border: 2px solid blue;
    @media (max-width: ${Small}) {
        width: 100%;
    };
`

export const HomeLeft = styled.div`
    width: 60%;
    height: 100%;
    border: 2px solid green;
    @media (max-width: ${Small}) {
        width: 100%;
    };
`