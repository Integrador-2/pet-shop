import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

export const Btn = styled.button`
    width: ${px2vw(140)};
    height: ${px2vw(65)};
    border-radius: ${px2vw(35)};
    background: var(--gradient);
    margin-left: ${px2vw(25)};
    outline: 0;

    &:hover {
        color: red;
        opacity: 0.8;
    }
`;