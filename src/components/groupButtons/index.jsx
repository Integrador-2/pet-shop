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
                <ButtonMenu origin="suplier" text="Cadastrar Fornecedor"></ButtonMenu>
                <ButtonMenu origin="service" text="Realizar Serviço"></ButtonMenu>
                <ButtonMenu origin="reversal" text="Estornos"></ButtonMenu>
                <ButtonMenu origin="report" text="Relatórios"></ButtonMenu>
            </ButtonContainer>
        </Container>
    );
}

export default GroupButtons;