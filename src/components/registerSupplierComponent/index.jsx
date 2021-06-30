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
import { AnimalsList, AnimalsListButtonsContainer, AnimalsListContainer, AnimalsListDiv } from "../registerClientComponent/style";
import { HeadCell, Line } from "../registerProductComponent/style";

const RegisterSupplierComponent = ({ title }) => {
    const {showAlert, showModal,
        setAlertConfig } = useContext(mainContext);    
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState();    
    const [object, setObject] = useState();            
    const [type, setType] = useState();            

    useEffect(() => {
        if (object) {
          axios.post(`http://localhost/petshop/pet-shop/src/api/fornecedores/cadastrar`, {          
            dados: object        
          }).then((response) => {
            console.log(response);
            setAlertConfig({
                'type': 'alert',
                'title': 'Cadastro efetuado com sucesso!',
                'text': 'O fornecedor foi cadastrado corretamente!',
                'show': 'flex'
              })
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

      if (!phoneNumber) {
        setAlertConfig({
          'type': 'alert',
          'title': 'Não é possível continuar',
          'text': 'Espécie é obrigatório!',
          'show': 'flex'
        })
        return;
      }

      if (!email) {
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
      
      setObject({
        nome: name,
        telefone: phoneNumber,
        email: email,
        endereco: address,
        tipo_entidade: type
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
                  <Field value={name} onChange={(e) => setName(e.target.value)} columns="2" type="text"/>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Endereço:</FieldLabel>
                  <Field value={address} onChange={(e) => setAddress(e.target.value)} columns="2" type="text"></Field>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Telefone:</FieldLabel>
                  <Field value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} columns="2" type="text"></Field>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>E-mail:</FieldLabel>
                  <Field value={email} onChange={(e) => setEmail(e.target.value)} columns="2" type="text"/>
                </FieldContainer>                
                <FieldContainer>
                  <FieldLabel>Pessoa:</FieldLabel>
                  <Select columns="2" onChange={(e) => setType(e.target.value)}>
                      <Option value="Fisica">Física</Option>
                      <Option value="Juridica">Jurídica</Option>
                  </Select>
                </FieldContainer>
                <FieldContainer/>
                <AnimalsListContainer>
                <AnimalsListButtonsContainer>
                    <ButtonForm onClick={() => console.log('inserir')}>Inserir</ButtonForm>
                    <ButtonForm onClick={() => console.log('editar')}>Editar</ButtonForm>
                    <ButtonForm onClick={() => console.log('remover')}>Remover</ButtonForm>
                </AnimalsListButtonsContainer>
                <AnimalsListDiv>
                    <AnimalsList>
                        <tbody>
                            <Line>
                                <HeadCell width={px2vw(200)}>Código</HeadCell>
                                <HeadCell width={px2vw(560)}>Produto</HeadCell>
                                <HeadCell width={px2vw(140)}>Preço</HeadCell>
                                <HeadCell width={px2vw(100)}>Quantidade</HeadCell>
                            </Line>                            
                        </tbody>
                    </AnimalsList>
                </AnimalsListDiv>
               </AnimalsListContainer>
              </DivFields>
              <DivButtonForm>
                  <ButtonForm onClick={() => handleInsert()}>Cadastrar</ButtonForm>
                  <ButtonForm>Cancelar</ButtonForm>
              </DivButtonForm>
          </Container>
    );
}

export default RegisterSupplierComponent;