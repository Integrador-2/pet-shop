import styled from "styled-components";

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: 100vw;
    background: var(--grey);
    height: ${px2vw(40)};
    display: flex;
    flex-direction: row;
    justify-content: right;
`;

export const Span = styled.span``;