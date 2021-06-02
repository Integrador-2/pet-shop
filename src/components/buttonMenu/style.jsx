import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

export const Btn = styled.button`
    width: 100%;
    height: ${px2vw(50)};
    background: rgba(0, 0, 0, 0);
    border-style: none;
    outline: 0;
    color: blue;

    &:hover {
        color: red;
        opacity: 0.8;
    }
`;