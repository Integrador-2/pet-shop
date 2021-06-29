import React, { useContext, useState } from "react";
import { Redirect, Route } from "react-router-dom";

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

    const {showAlert, handleChangePage, history } = useContext(mainContext);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        handleChangePage('start', history);
    }

    return (
        <Container>
            <Alert showAlert={showAlert} />            
            <LoginContainer>
                <ImgContainer>
                    <Logo src={ImgLogo} />
                </ImgContainer>
                <h2>Seja bem-vindo. Realize seu login:</h2>
                <LabelContainer>
                    <Span><b>Login:</b></Span>
                </LabelContainer>
                <LoginInput value={login} onChange={(e) => setLogin(e.target.value)} />
                <LabelContainer>
                    <Span><b>Senha:</b></Span>
                </LabelContainer>
                <LoginInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <ButtonContainer>
                    <Button onClick={() => handleLogin()}><b>Entrar</b></Button>
                </ButtonContainer>
            </LoginContainer>
        </Container>
    );
}

export default LoginForm;