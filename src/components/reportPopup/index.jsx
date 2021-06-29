import React, {useState} from "react";

import { ContainerButton, Button, Item, ModalScreen, TitleItem, TitleTicket, Container } from "./style";

const ReportPopup = ({show}) => {
  const [showAlert, setShowAlert] = useState(show);

  return(
    <Container display={showAlert}>
      <ModalScreen>
        <TitleTicket>Detalhes - Estorno Exemplo 1</TitleTicket>
        <TitleItem>N Serviço:</TitleItem>
        <Item>0001</Item>
        <TitleItem>Descrição do Serviço:</TitleItem>
        <Item>Compra de ração e consulta</Item>
        <TitleItem>Motivo do Estorno:</TitleItem>
        <Item>Cliente quis devolver a ração</Item>
        <TitleItem>Cliente:</TitleItem>
        <Item>Cliente Teste</Item>
        <TitleItem>Valor Total:</TitleItem>
        <Item>R$ 150,00</Item>
        <ContainerButton>
          <Button onClick={() => setShowAlert('none')}>Voltar</Button>
        </ContainerButton>
      </ModalScreen>
    </Container>
  )
}

export default ReportPopup;