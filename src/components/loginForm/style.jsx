import styled from "styled-components";

import { Field } from "../register/style";
import { Btn } from "../buttonMenu/style";

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: left;
`;

export const ImageContainer = styled.div`
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Image = styled.img`
    margin: 0 0 0 ${px2vw(100)};
    border-radius: ${px2vw(20)};
    width: 25vw;
    height: 25vw;
`;

export const LoginContainer = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img`
    width: ${px2vw(150)};
    height: ${px2vw(50)};
`;

export const ImgContainer = styled.div`
    width: 25vw;
    margin: 0 0 ${px2vw(50)} 0;
    display: flex;
    justify-content: center;
`;

export const ButtonContainer = styled(ImgContainer)`
    margin: ${px2vw(50)} 0 0 0;
`;

export const LabelContainer = styled.div`
    margin: ${px2vw(25)} 0 ${px2vw(5)} 0;
    display: flex;
    justify-content: left;
`;

export const Span = styled.span``

export const LoginInput = styled(Field)`
    widht: 20vw;
`;

export const Button = styled(Btn)`
    height: ${px2vw(40)};
`;