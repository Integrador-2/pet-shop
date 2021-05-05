import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: 100%;
    height: ${px2vw(100)};
    display: flex;
    justify-content: center;
`;

export const ButtonContainer = styled.div`
    margin-top: ${px2vw(45)};
    display: flex;
    flex-direction: row;
`;