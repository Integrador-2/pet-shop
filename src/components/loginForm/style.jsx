import styled from "styled-components";

import { Field } from "../register/style";
import { Btn } from "../buttonMenu/style";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const ImageContainer = styled.div`
    width: 50%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    border-radius: 20px;
    width: 50%;
    height: 50%;
`;

export const LoginContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const LabelContainer = styled.div`
    display: flex;
    justify-content: left;
`;

export const LoginInput = styled(Field)`
    widht: 90%;
`;

export const Button = styled(Btn)`
    height: 30px;
`;