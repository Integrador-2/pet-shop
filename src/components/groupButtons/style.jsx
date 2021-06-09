import styled from 'styled-components';

import px2vw from "../../utils/px2vw";

export const Container = styled.div`        
    position: fixed;        
    height: 100vh;    
    background: var(--purple);
    width: ${px2vw(240)};    
`;

export const ButtonContainer = styled.div`
    margin-top: ${px2vw(45)};
    width: ${px2vw(240)};
    display: flex;
    flex-direction: column;
`;

export const Img = styled.img`
    margin: 0 0 ${px2vw(50)} ${px2vw(50)};
    width: ${px2vw(150)};
    height: ${px2vw(45)};
`;