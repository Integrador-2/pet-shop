import styled from "styled-components";

import { ModalScreen, Container } from "../modal/style";

import px2vw from "../../utils/px2vw";

export const AlertContainer = styled(Container)`
    z-index: 3;
`;

export const Modal = styled(ModalScreen)`
    width: ${px2vw(500)};
    height: ${px2vw(200)};
    background: var(--purple);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Button = styled.button`
    width: ${px2vw(120)};
    height: ${px2vw(35)};
    background: var(--grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 ${px2vw(4)} 0 0;

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
    width: ${px2vw(20)};
    height: ${px2vw(20)};
    margin: ${px2vw(2)};
    padding: 0;
`