import React, { useContext } from 'react';
import { Container, ButtonContainer } from './style';
import ButtonMenu from '../buttonMenu';

import Logo from '../../assets/logo.png';
import { Img } from './style';
import context from '../../context/context';

import Start from '../../assets/inicio.png';
import Register from '../../assets/cadastros.png';
import Service from '../../assets/servicos.png';
import Reversal from '../../assets/estornos.png';
import Report from '../../assets/relatorios.png';

const GroupButtons = () => {

    const { actualPage } = useContext(context);

    return (        
        <Container>
            <ButtonContainer>
                <Img src={Logo}/>
                <ButtonMenu origin="start" text="Início" icon={Start} marked={actualPage}></ButtonMenu>
                <ButtonMenu origin="register" text="Cadastros" icon={Register} marked={actualPage}></ButtonMenu>
                <ButtonMenu origin="service" text="Serviços" icon={Service} marked={actualPage}></ButtonMenu>
                <ButtonMenu origin="reversal" text="Estornos" icon={Reversal} marked={actualPage}></ButtonMenu>                
                <ButtonMenu origin="report" text="Relatórios" icon={Report} marked={actualPage}></ButtonMenu>
            </ButtonContainer>
        </Container>
    );
}

/*
                <ButtonMenu origin="service" text="Serviço" marked={actualPage}></ButtonMenu>
                <ButtonMenu origin="client" text="Cliente" marked={actualPage}></ButtonMenu>
                <ButtonMenu origin="product" text="Produtos" marked={actualPage}></ButtonMenu>
                <ButtonMenu origin="employee" text="Funcionário" marked={actualPage}></ButtonMenu>
                <ButtonMenu origin="suplier" text="Fornecedor" marked={actualPage}></ButtonMenu>
                <ButtonMenu origin="reversal" text="Estornos" marked={actualPage}></ButtonMenu>
                <ButtonMenu origin="report" text="Relatórios" marked={actualPage}></ButtonMenu>
*/

export default GroupButtons;