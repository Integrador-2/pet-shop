import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    display: flex;
    height: ${px2vw(70)};
`;

export const Btn = styled.button`
    width: 100%;
    height: ${px2vw(50)};
    background: rgba(0, 0, 0, 0);
    font-size: 1.5rem;
    border-style: none;
    outline: 0;
    color: ${props => props.color ? props.color : 'blue'};
    padding: 0 0 ${px2vw(20)} 0;

    &:hover {
        color: red;
        opacity: 0.8;
    }
`;

export const Marked = styled.div`
    height: ${px2vw(30)};
    width: ${px2vw(5)};
    left: 0;
    background: ${props => props.background !== '' ? props.background : ''};
`;

export const Img = styled.img`
    width: ${px2vw(35)};
    height: ${px2vw(50)};
    margin-left: ${px2vw(15)};
    padding: 0 0 ${px2vw(20)} 0;
`;