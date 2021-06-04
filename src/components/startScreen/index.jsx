import React from "react";

import {Container, ReminderContainer, SubTitle, Title} from "./style";

import Reminder from "../reminder/index";

import ReminderImg from "../../assets/Lembrete.png";
import ProductsImg from "../../assets/produtos.png";

const StartScreen = () => {
    const reminders = [
        'Serviço 01',
        'Serviço 02',
        'Serviço 03'
    ]
    
    return(
        <Container>
            <Title>Seja bem vindo, <u>Funcionário Teste</u></Title>
            <SubTitle>Lembretes</SubTitle>
            <ReminderContainer>
                <Reminder title="Serviços a serem realizados hoje:" img={ReminderImg} reminders={reminders} />
                <Reminder title="Confira sempre a quantidade de produtos inseridos no serviço" img={ProductsImg}/>
            </ReminderContainer>
        </Container>
    );
}

export default StartScreen;