import React from "react";
import { Container, DivTitle, Title, FieldContainer, FieldLabel, Field, DivFields, DivButtonForm, ButtonForm } from './style';

const Register = () => {
    return (
        <Container>
            <DivTitle>
                <Title>Preencha todos os campos para realizar o cadastro:</Title>
            </DivTitle>
            <DivFields>
                <FieldContainer>
                    <FieldLabel>Nome Completo:</FieldLabel>
                    <Field />
                </FieldContainer>
                <FieldContainer>
                    <FieldLabel>Data de Nascimento:</FieldLabel>
                    <Field />
                </FieldContainer>
                <FieldContainer>
                    <FieldLabel>Endereço:</FieldLabel>
                    <Field />
                </FieldContainer>
                <FieldContainer>
                    <FieldLabel>Gênero:</FieldLabel>
                    <Field />
                </FieldContainer>
                <FieldContainer>
                    <FieldLabel>Telefone:</FieldLabel>
                    <Field />
                </FieldContainer>
            </DivFields>
            <DivButtonForm>
                <ButtonForm>Cadastrar</ButtonForm>
                <ButtonForm>Cancelar</ButtonForm>
            </DivButtonForm>
        </Container>
    );
}

export default Register;