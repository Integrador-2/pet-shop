import React from 'react';
import { Container, ButtonContainer } from './style';
import ButtonMenu from '../buttonMenu';

const GroupButtons = () => {

    return (
        <Container>
            <ButtonContainer>
                <ButtonMenu origin="service" text="Serviço"></ButtonMenu>
                <ButtonMenu origin="client" text="Cliente"></ButtonMenu>
                <ButtonMenu origin="product" text="Produtos"></ButtonMenu>
                <ButtonMenu origin="employee" text="Funcionário"></ButtonMenu>
                <ButtonMenu origin="suplier" text="Fornecedor"></ButtonMenu>
                <ButtonMenu origin="reversal" text="Estornos"></ButtonMenu>
                <ButtonMenu origin="report" text="Relatórios"></ButtonMenu>
            </ButtonContainer>
        </Container>
    );
}

export default GroupButtons;