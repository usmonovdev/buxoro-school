import styled from "styled-components";
import { Small } from "./breakpoints";

export const HomeBox = styled.div`
    margin-top: 80px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: ${Small}) {
        display: flex;
        flex-direction: column;
    };
`