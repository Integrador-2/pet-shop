import axios from "axios";
import React, { useContext, useState, useEffect } from "react";

import mainContext from "../../context/context";

import {
    Container, DivTitle, Title, FieldContainer, FieldLabel,
    Field, DivFields, DivButtonForm, ButtonForm, Select, Option
} from './style';
import Modal from '../modal/index';
import Alert from '../alert/index';
import px2vw from "../../utils/px2vw";

const RegisterClientComponent = ({ client, title }) => {
    const {showAlert, showModal,
        setAlertConfig, alertConfig } = useContext(mainContext);
    const [image, setImage] = useState('');
    const [waitingResponse, setWaitingResponse] = useState('');
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [race, setRace] = useState("");
    const [gender, setGender] = useState("Produto");
    const [origin, setOrigin] = useState("");
    const [clientObject, setClientObject] = useState();
    const [object, setObject] = useState();      
    const [idEntity, setIdEntity] = useState("");
    const [coat, setCoat] = useState();
    const [birthDate, setBirthDate] = useState();

    useEffect(() => {
        if (alertConfig.response) {
            if (waitingResponse === 'image') {
                if (alertConfig.response === 'true') {
                    setImage('');
                }
            }
        }
    }, [alertConfig, waitingResponse]);

    useEffect(() => {
      if (object) {
        axios.post(`http://localhost/petshop/pet-shop/src/api/animais/cadastrar`, {          
          dados: object        
        }).then((response) => {
            console.log(response);       
        });
      }
    }, [object])

    const handleInsert = () => {
      if (!name) {
        setAlertConfig({
          'type': 'alert',
          'title': 'Não é possível continuar',
          'text': 'Nome é obrigatório!',
          'show': 'flex'
        })
        return;
      }

      if (!species) {
        setAlertConfig({
          'type': 'alert',
          'title': 'Não é possível continuar',
          'text': 'Espécie é obrigatório!',
          'show': 'flex'
        })
        return;
      }

      if (!race) {
        setAlertConfig({
          'type': 'alert',
          'title': 'Não é possível continuar',
          'text': 'Raça é obrigatória!',
          'show': 'flex'
        })
        return;
      }

      if (!origin) {
        setAlertConfig({
            'type': 'alert',
            'title': 'Não é possível continuar',
            'text': 'Origem é obrigatório!',
            'show': 'flex'
          })
          return;
      }     
      
      if (!coat) {
        setAlertConfig({
            'type': 'alert',
            'title': 'Não é possível continuar',
            'text': 'Pelagem é obrigatória!',
            'show': 'flex'
          })
          return;
      }     
       
      
      setObject({
        nome: name,
        data_nascimento: birthDate,
        especie: species,
        raca: race,
        sexo: gender,
        pelagem: coat,
        origem: origin,
        id_cliente: client
      })
      //console.log(object);
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
                  <FieldLabel>Nome:</FieldLabel>
                  <Field onChange={(e) => setName(e.target.value)} columns="2" type="text"/>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Sexo:</FieldLabel>
                  <Select columns="2" onChange={(e) => setGender(e.target.value)}>
                  <Option selected={gender === 'Masculino' ? "true" : ""} value="Masculino">Masculino</Option>
                      <Option selected={gender === 'Feminino' ? "true" : ""} value="Feminino">Feminino</Option>
                  </Select>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Espécie:</FieldLabel>
                  <Field value={species} onChange={(e) => setSpecies(e.target.value)} columns="2" type="text"></Field>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Raça:</FieldLabel>
                  <Field value={race} onChange={(e) => setRace(e.target.value)} columns="2" type="text"/>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Pelagem:</FieldLabel>
                  <Field value={coat} onChange={(e) => setCoat(e.target.value)} columns="2" type="text"/>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Origem:</FieldLabel>
                  <Field onChange={(e) => setOrigin(e.target.value)} type="text"></Field>
                </FieldContainer>                      
                <FieldContainer>
                  <FieldLabel>Data de Nascimento:</FieldLabel>
                  <Field onChange={(e) => setBirthDate(e.target.value)} type="date"></Field>
                </FieldContainer>                      
              </DivFields>
              <DivButtonForm>
                  <ButtonForm onClick={() => handleInsert()}>Cadastrar</ButtonForm>
                  <ButtonForm>Cancelar</ButtonForm>
              </DivButtonForm>
          </Container>
    );
}

export default RegisterClientComponent;