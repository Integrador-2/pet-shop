import React from "react";
import {Container, DivTitle, Title, FieldContainer, FieldLabel, Field, DivFields, DivButtonForm, ButtonForm} from './style';

const Register = () => {
    return (
        <Container>
            <DivTitle>
                <Title>Preencha todos os campos para realizar o cadastro:</Title>
            </DivTitle>
            <DivFields>
                <FieldContainer>
                    <FieldLabel>Nome Completo:</FieldLabel>
                    <Field/>
                </FieldContainer>
                <FieldContainer>
                    <FieldLabel>Nome Completo:</FieldLabel>
                    <Field/>
                </FieldContainer>
                <FieldContainer>
                    <FieldLabel>Nome Completo:</FieldLabel>
                    <Field/>
                </FieldContainer>
                <FieldContainer>
                    <FieldLabel>Nome Completo:</FieldLabel>
                    <Field/>
                </FieldContainer>
                <FieldContainer>                    
                    <FieldLabel>Nome Completo:</FieldLabel>
                    <Field/>
                </FieldContainer>
                <FieldContainer>
                    <FieldLabel>Nome Completo:</FieldLabel>
                    <Field/>
                </FieldContainer>
            </DivFields>
            <DivButtonForm>
                <ButtonForm>CADASTRAR</ButtonForm>
                <ButtonForm>CANCELAR</ButtonForm>
            </DivButtonForm>
        </Container>
    );
}

export default Register;