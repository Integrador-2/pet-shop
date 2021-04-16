import React from 'react';
import { Container, ButtonContainer } from './style';
import ButtonMenu from '../buttonMenu';

const GroupButtons = () => {

    return (
        <Container>
            <ButtonContainer>
                <ButtonMenu origin="client" text="Cadastrar Cliente"></ButtonMenu>
                <ButtonMenu origin="employee" text="Cadastrar Funcionário"></ButtonMenu>
                <ButtonMenu origin="product" text="Cadastrar Produtos"></ButtonMenu>
                <ButtonMenu text="Cadastrar Fornecedor"></ButtonMenu>
                <ButtonMenu text="Realizar Serviço"></ButtonMenu>
                <ButtonMenu text="Estornos"></ButtonMenu>
                <ButtonMenu text="Relatórios"></ButtonMenu>
                <ButtonMenu text="Editar Cadastro"></ButtonMenu>
            </ButtonContainer>
        </Container>
    );
}

export default GroupButtons;