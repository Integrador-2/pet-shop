import styled from "styled-components";

import { ModalScreen } from "../modal/style";

export const Modal = styled(ModalScreen)`
    width: 500px;
    height: 200px;
    background: var(--gradient);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Button = styled.button`
    width: 100px;
    height: 35px;
    background: var(--grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 15px;
`;

export const InsideButton = styled.div`
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