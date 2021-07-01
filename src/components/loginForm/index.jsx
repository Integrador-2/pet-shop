import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
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
    const {showAlert, handleChangePage, history, setAlertConfig } = useContext(mainContext);

    const [isLogged, setIsLogged] = useState(false);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        setIsLogged(true);
        //handleChangePage('start', history);
    }

    useEffect(() => {
        if (isLogged !== '') {
            if (!login) {
                setAlertConfig({
                    'type': 'alert',
                    'title': 'Não é possível continuar',
                    'text': 'Login não foi informado!',
                    'show': 'flex'
                })
                setIsLogged('');
                return;
            }
            if (!password) {
                setAlertConfig({
                    'type': 'alert',
                    'title': 'Não é possível continuar',
                    'text': 'Senha não foi informada!',
                    'show': 'flex'
                })
                setIsLogged('');
                return;
            }
            axios.post(`http://localhost/api/funcionarios/validaLogin`, {                    
                dados: {
                    login: login,
                    password: password
                }
            }).then((response) => {
                handleChangePage('start', history);
            });        
        }
    }, [isLogged]); 

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