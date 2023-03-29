import styled from "styled-components";
import { ExtraLarge, Medium, Small } from "./breakpoints";

export const Container = styled.div`
    width: 80vw;
    margin: 0 auto;
    @media (max-width: ${ExtraLarge}) {
        width: 80vw
    };
    @media (max-width: ${Medium}) {
        width: 90vw
    };
    @media (max-width: ${Small}) {
        width: 95vw
    };
`