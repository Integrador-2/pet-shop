import React from "react";

import {
    Container, ImageContainer, Image, LoginContainer,
    LabelContainer, LoginInput, Button
} from './style';

import Img from "../../assets/login.png";

const LoginForm = () => {

    return (
        <Container>
            <ImageContainer>
                <Image src={Img} />
            </ImageContainer>
            <LoginContainer>
                <h2>Seja bem-vindo. Realize seu login:</h2>
                <LabelContainer>
                    <span>Login:</span>
                </LabelContainer>
                <LoginInput />
                <LabelContainer>
                    <span>Senha:</span>
                </LabelContainer>
                <LoginInput type="password" />
            </LoginContainer>
        </Container>
    );
}

export default LoginForm;