import React, {useContext} from "react";
import Reminder from "../components/reminder";

import { Container, Title, ReminderContainer } from "../components/startScreen/style";
import MainContext from "../context/context";

import Cliente from "../assets/cliente.png";
import Funcionario from "../assets/funcionario.png";
import Fornecedor from "../assets/fornecedores.png";
import Produto from "../assets/produtos.png";

const RegisterPage = () => {
    const { setActualPage } = useContext(MainContext);

    return(
        <Container>
            <Title>Selecione o tipo de cadastro a ser realizado</Title>
            <ReminderContainer>
                <Reminder link="client" title="CADASTRAR CLIENTE" img={Cliente}/>
                <Reminder link="employee" title="CADASTRAR FUNCIONÁRIO" img={Funcionario}/>                
            </ReminderContainer>
            <ReminderContainer>
                <Reminder link="supplier" title="CADASTRAR FORNECEDOR" img={Fornecedor}/>
                <Reminder link="product" title="CADASTRAR PRODUTO" img={Produto}/>
            </ReminderContainer>
        </Container>
    );
}

export default RegisterPage;