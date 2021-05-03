import styled from "styled-components";

import { ModalScreen, Container } from "../modal/style";

export const AlertContainer = styled(Container)`
    z-index: 3;
`;

export const Modal = styled(ModalScreen)`
    width: 500px;
    height: 200px;
    background: var(--gradient);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Button = styled.button`
    width: 120px;
    height: 35px;
    background: var(--grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 15px;
    margin: 0 4px 0 0;
    
    &:hover {
        color: red;
    }
`;

export const InsideButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const ImageContainer = styled.div`
    width: 20px;
    height: 20px;
    margin: 2px;
    padding: 0;
`