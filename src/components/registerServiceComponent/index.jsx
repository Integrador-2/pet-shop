import axios from "axios";
import React, { useContext, useState, useEffect } from "react";

import mainContext from "../../context/context";

import {
    Container, DivTitle, Title, FieldContainer, FieldLabel,
    Field, DivFields, DivButtonForm, ButtonForm, Select, Option,
    Image, FileInput, FileInputContainer, ImageContainer, TextAreaField
} from './style';
import Modal from '../modal/index';
import Alert from '../alert/index';

const RegisterServiceComponent = ({ service, title }) => {
    const {showAlert, showModal,
        setAlertConfig } = useContext(mainContext);
    const [serviceObject, setServiceObject] = useState();
    const [veterinary, setVeterinary] = useState("");
    const [price, setPrice] = useState("");
    const [object, setObject] = useState();
    const [assistant, setAssistant] = useState();
    const [description, setDescription] = useState();
    const [obs, setObs] = useState();
    const [payment, setPayment] = useState();
    const [client, setClient] = useState();
    const [entryDate, setEntryDate] = useState();
    const [leaveDate, setLeaveDate] = useState();
    const [scheduleDate, setScheduleDate] = useState();
    const [timeScheduleDate, setTimeScheduleDate] = useState();
    
    const [doing, setDoing] = useState(service ? 'edit' : 'insert');

    useEffect(() => {
      if(object) {
        axios.post(`http://localhost/api/procedimentos/cadastrar`, {          
          dados: object
        }).then((response) => {
            console.log(response.request.responseText);
            setAlertConfig({
                'type': 'alert',
                'title': 'Cadastro efetuado com sucesso!',
                'text': 'Serviço foi cadastrado com sucesso!',
                'show': 'flex'
              })
              return;
        });
      }
    }, [object])

    useEffect(() => {
        if (serviceObject) {
            axios.post(`http://localhost/api/servicos/cadastrar`, {          
                dados: serviceObject
            }).then((response) => {
                setObject({
                    valor_total: price,
                    data_agendamento: scheduleDate,
                    hora_agendamento: timeScheduleDate,
                    data_entrada: entryDate,
                    data_saida: leaveDate,
                    forma_pagamento: payment,
                    estado_procedimento: 'Teste',
                    id_funcionario: 1,
                    id_cliente: 1,
                    id_animal: 1,
                    id_servico: response.data.dados
                  });
            });
        }
    }, [serviceObject]);

    const handleInsert = () => {
      if (!description) {
        setAlertConfig({
          'type': 'alert',
          'title': 'Não é possível continuar',
          'text': 'Descrição é obrigatória!',
          'show': 'flex'
        })
        return;
      }

      setServiceObject({
        preco: price,
        descricao: description,
        assistente: assistant,
        veterinario: veterinary,
        observacao: obs
      });      
    }

    return (
          <Container>
              <Alert showAlert={showAlert} />
              <Modal showModal={showModal} />
              <DivTitle>
                  <Title>{title}</Title>
              </DivTitle>
              <DivFields columns="2">
                <FieldContainer>
                  <FieldLabel>Assistente:</FieldLabel>
                  <Select columns="2" onChange={(e) => setAssistant(e.target.value)}>
                      <Option selected={assistant === 'Nenhum' ? true : false} value="Nenhum">Nenhum</Option>
                      <Option selected={assistant === 'Rafael Eduardo Kepler' ? true : false} value="1">Rafael Eduardo Kepler</Option>
                  </Select>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Veterinário:</FieldLabel>
                  <Select columns="2" onChange={(e) => setVeterinary(e.target.value)}>
                      <Option selected={veterinary === 'Nenhum' ? true : false} value="Nenhum">Nenhum</Option>
                      <Option selected={veterinary === 'Rafael Eduardo Kepler' ? true : false} value="1">Rafael Eduardo Kepler</Option>
                  </Select>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Descrição:</FieldLabel>
                  <TextAreaField columns="2" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></TextAreaField>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Observações:</FieldLabel>
                  <TextAreaField columns="2" rows="3" value={obs} onChange={(e) => setObs(e.target.value)}></TextAreaField>
                </FieldContainer>                
                <FieldContainer>
                  <FieldLabel>Valor Total:</FieldLabel>
                  <Field value={price} onChange={(e) => setPrice(e.target.value)} type="text"></Field>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Forma de Pagamento:</FieldLabel>
                  <Select columns="2" onChange={(e) => setPayment(e.target.value)}>
                      <Option selected={payment === 'Dinheiro' ? true : false} value="Dinheiro">Dinheiro</Option>
                      <Option selected={payment === 'Cartão' ? true : false} value="Cartão">Cartão</Option>
                      <Option selected={payment === 'Pix' ? true : false} value="Pix">Pix</Option>
                  </Select>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Cliente:</FieldLabel>
                  <Select columns="2" onChange={(e) => setClient(e.target.value)}>
                      <Option selected={client === 'Rafael Kepler' ? true : false} value="Rafael Kepler">Rafael Kepler</Option>                                            
                  </Select>
                </FieldContainer>
                <FieldContainer/>                
                <FieldContainer>
                  <FieldLabel>Data de Entrada do Animal:</FieldLabel>
                  <Field value={entryDate} onChange={(e) => setEntryDate(e.target.value)} type="date"></Field>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Data de Saída do Animal:</FieldLabel>
                  <Field value={leaveDate} onChange={(e) => setLeaveDate(e.target.value)} type="date"></Field>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Data de agendamento:</FieldLabel>
                  <Field value={scheduleDate} onChange={(e) => setScheduleDate(e.target.value)} type="date"></Field>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Hora do agendamento:</FieldLabel>
                  <Field value={timeScheduleDate} onChange={(e) => setTimeScheduleDate(e.target.value)} type="time"></Field>
                </FieldContainer>
              </DivFields>
              <DivButtonForm>
                  <ButtonForm onClick={() => handleInsert()}>Cadastrar</ButtonForm>
                  <ButtonForm>Cancelar</ButtonForm>
              </DivButtonForm>
          </Container>
    );
}

export default RegisterServiceComponent;