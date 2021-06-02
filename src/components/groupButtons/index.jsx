import React, { useContext } from 'react';
import { Container, ButtonContainer } from './style';
import ButtonMenu from '../buttonMenu';

import Logo from '../../assets/logo.png';
import { Img } from './style';
import context from '../../context/context';

const GroupButtons = () => {

    const { actualPage } = useContext(context);

    return (        
        <Container>
            <ButtonContainer>
                <Img src={Logo}/>
                <ButtonMenu origin="service" text="Serviço" marked={actualPage}></ButtonMenu>
                <ButtonMenu origin="client" text="Cliente" marked={actualPage}></ButtonMenu>
                <ButtonMenu origin="product" text="Produtos" marked={actualPage}></ButtonMenu>
                <ButtonMenu origin="employee" text="Funcionário" marked={actualPage}></ButtonMenu>
                <ButtonMenu origin="suplier" text="Fornecedor" marked={actualPage}></ButtonMenu>
                <ButtonMenu origin="reversal" text="Estornos" marked={actualPage}></ButtonMenu>
                <ButtonMenu origin="report" text="Relatórios" marked={actualPage}></ButtonMenu>
            </ButtonContainer>
        </Container>
    );
}

export default GroupButtons;