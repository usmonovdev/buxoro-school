import styled from "styled-components";
import { ExtraLarge, Medium } from "./breakpoints";

export const Container = styled.div`
    width: 70vw;
    margin: 0 auto;
    @media (max-width: ${ExtraLarge}) {
        width: 70vw
    };
    @media (max-width: ${Medium}) {
        width: 90vw
    };
`