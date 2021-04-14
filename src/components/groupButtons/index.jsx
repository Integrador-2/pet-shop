import React from 'react';
import {Container, ButtonContainer} from './style';
import ButtonMenu from '../buttonMenu';

const GroupButtons = () => {
    return (
        <Container>
            <ButtonContainer>
                <ButtonMenu text="Botão 1"></ButtonMenu>
                <ButtonMenu text="Botão 2"></ButtonMenu>
                <ButtonMenu text="Botão 3"></ButtonMenu>
                <ButtonMenu text="Botão 4"></ButtonMenu>
                <ButtonMenu text="Botão 5"></ButtonMenu>
                <ButtonMenu text="Botão 6"></ButtonMenu>
                <ButtonMenu text="Botão 7"></ButtonMenu>
                <ButtonMenu text="Botão 8"></ButtonMenu>
            </ButtonContainer>
        </Container>
    );
}

export default GroupButtons;