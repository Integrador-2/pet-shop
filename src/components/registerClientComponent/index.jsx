import axios from "axios";
import React, { useContext, useState, useEffect } from "react";

import mainContext from "../../context/context";

import {
    Container, DivTitle, Title, FieldContainer, FieldLabel,
    Field, DivFields, DivButtonForm, ButtonForm, Select, Option,
    AnimalsListContainer, AnimalsListButtonsContainer, AnimalsListDiv, 
    AnimalsList, Line, HeadCell, Cell
} from './style';
import Modal from '../modal/index';
import Alert from '../alert/index';
import px2vw from "../../utils/px2vw";

const RegisterClientComponent = ({ origin, title, client }) => {
    const {showAlert, showModal,
        setAlertConfig, alertConfig, handleChangePage } = useContext(mainContext);
    const [image, setImage] = useState('');
    const [waitingResponse, setWaitingResponse] = useState('');
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("Produto");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [clientObject, setClientObject] = useState();
    const [entityObject, setEntityObject] = useState();      
    const [idEntity, setIdEntity] = useState("");
    const [idClient, setIdClient] = useState(client);

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
      if (clientObject) {
        axios.post(`http://localhost/petshop/pet-shop/src/api/clientes/cadastrar`, {          
          dados: clientObject        
        }).then((response) => {
            setIdClient(response.data.dados);
            setAlertConfig({
                'type': 'alert',
                'title': 'Cadastro efetuado com sucesso!',
                'text': 'O cliente foi cadastrado com sucesso!',
                'show': 'flex'
              })
        });
      }
    }, [clientObject])

    useEffect(() => {
      if (entityObject) {
        axios.post(`http://localhost/petshop/pet-shop/src/api/entidades/cadastrar`, {          
          dados: entityObject        
        }).then((response) => {
            console.log(response);  
            setIdEntity(response.data.dados);  
            setClientObject({   
                telefone: phoneNumber,
                registro_entidade: idEntity 
            });        
        });
      }
    }, [entityObject])

    const handleChange = (e) => {
      setImage(URL.createObjectURL(e.target.files[0]));
    }

    const removeImage = () => {
        if (image) {
            setAlertConfig({
                'type': 'confirm',
                'title': 'Tem certeza que deseja efetuar essa ação?',
                'text': 'Tem certeza que deseja excluir a imagem?',
                'show': 'flex',
                'response': 'false'
            });

            setWaitingResponse('image');
        }
    }

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

      if (!birthDate) {
        setAlertConfig({
          'type': 'alert',
          'title': 'Não é possível continuar',
          'text': 'Data de Nascimento é obrigatório!',
          'show': 'flex'
        })
        return;
      }

      if (!address) {
        setAlertConfig({
          'type': 'alert',
          'title': 'Não é possível continuar',
          'text': 'Endereço é obrigatório!',
          'show': 'flex'
        })
        return;
      }

      if (!phoneNumber) {
        setAlertConfig({
            'type': 'alert',
            'title': 'Não é possível continuar',
            'text': 'Telefone é obrigatório!',
            'show': 'flex'
          })
          return;
      }     
       
      
      setEntityObject({
        nome: name,
        data_nascimento: birthDate,
        endereco: address,
        genero: gender,
      })
      //console.log(object);
    }

    const handleAnimal = (type) => {
        if (type === 'insert') {
            if (idClient) {
                handleChangePage(`client/${idClient}/animals/`)
            } else {
                setAlertConfig({
                    'type': 'alert',
                    'title': 'Não é possível continuar',
                    'text': 'Só é possível criar um animal de um cliente já cadastrado!',
                    'show': 'flex'
                  })
                  return;
            }
        }
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
                  <FieldLabel>Nome Completo:</FieldLabel>
                  <Field onChange={(e) => setName(e.target.value)} columns="2" type="text"/>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Data de Nascimento:</FieldLabel>
                  <Field onChange={(e) => setBirthDate(e.target.value)} columns="2" type="date"></Field>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Endereço:</FieldLabel>
                  <Field onChange={(e) => setAddress(e.target.value)} columns="2" type="text"/>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Gênero:</FieldLabel>
                  <Select columns="2" onChange={(e) => setGender(e.target.value)}>
                      <Option value="Masculino">Masculino</Option>
                      <Option value="Feminino">Feminino</Option>
                      <Option value="Outro">Outro</Option>
                  </Select>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Telefone:</FieldLabel>
                  <Field onChange={(e) => setPhoneNumber(e.target.value)} type="number"></Field>
                </FieldContainer>                      
              </DivFields>
              <AnimalsListContainer>
                <AnimalsListButtonsContainer>
                    <ButtonForm onClick={() => handleAnimal('insert')}>Inserir</ButtonForm>
                    <ButtonForm onClick={() => console.log('editar')}>Editar</ButtonForm>
                    <ButtonForm onClick={() => console.log('remover')}>Remover</ButtonForm>
                </AnimalsListButtonsContainer>
                <AnimalsListDiv>
                    <AnimalsList>
                        <tbody>
                            <Line>
                                <HeadCell width={px2vw(200)}>Código</HeadCell>
                                <HeadCell width={px2vw(560)}>Nome</HeadCell>
                                <HeadCell width={px2vw(140)}>Sexo</HeadCell>
                                <HeadCell width={px2vw(100)}>Espécie</HeadCell>
                            </Line>                            
                        </tbody>
                    </AnimalsList>
                </AnimalsListDiv>
               </AnimalsListContainer>
              <DivButtonForm>
                  <ButtonForm onClick={() => handleInsert()}>Cadastrar</ButtonForm>
                  <ButtonForm>Cancelar</ButtonForm>
              </DivButtonForm>
          </Container>
    );
}

export default RegisterClientComponent;