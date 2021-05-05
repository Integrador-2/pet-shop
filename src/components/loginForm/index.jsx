import React, { useContext, useState } from "react";

import Alert from "../alert/index";

import {
    Container, ImageContainer, Image, LoginContainer,
    LabelContainer, LoginInput, Button, Logo, ImgContainer,
    Span, ButtonContainer
} from './style';

import Img from "../../assets/login.png";
import ImgLogo from "../../assets/logo.png";

import mainContext from "../../context/context";

const LoginForm = () => {

    const { setActualPage, showAlert, setShowAlert } = useContext(mainContext);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        setActualPage('service');
    }


    return (
        <Container>
            <Alert showAlert={showAlert} />
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
                <LoginInput value={login} />
                <LabelContainer>
                    <Span><b>Senha:</b></Span>
                </LabelContainer>
                <LoginInput type="password" value={password} />
                <ButtonContainer>
                    <Button onClick={() => handleLogin()}><b>Entrar</b></Button>
                </ButtonContainer>
            </LoginContainer>
        </Container>
    );
}

export default LoginForm;