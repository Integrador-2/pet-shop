import React, { useContext } from "react";

import {
    Container, ImageContainer, Image, LoginContainer,
    LabelContainer, LoginInput, Button, Logo, ImgContainer,
    Span, ButtonContainer
} from './style';

import Img from "../../assets/login.png";
import ImgLogo from "../../assets/logo.png";

import mainContext from "../../context/context";

const LoginForm = () => {

    const { setActualPage } = useContext(mainContext);

    const handleLogin = () => {
        setActualPage('client');
    }


    return (
        <Container>
            <ImageContainer>
                <Image src={Img} />
            </ImageContainer>
            <LoginContainer>
                <ImgContainer>
                    <Logo src={ImgLogo} />
                </ImgContainer>
                <h2>Seja bem-vindo. Realize seu login:</h2>
                <LabelContainer>
                    <Span><b>Login:</b></Span>
                </LabelContainer>
                <LoginInput />
                <LabelContainer>
                    <Span><b>Senha:</b></Span>
                </LabelContainer>
                <LoginInput type="password" />
                <ButtonContainer>
                    <Button onClick={() => handleLogin()}><b>Entrar</b></Button>
                </ButtonContainer>
            </LoginContainer>
        </Container>
    );
}

export default LoginForm;