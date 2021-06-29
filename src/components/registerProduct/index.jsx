import React, { useContext, useState, useEffect } from "react";

import mainContext from "../../context/context";

import {
    Container, DivTitle, Title, FieldContainer, FieldLabel,
    Field, DivFields, DivButtonForm, ButtonForm, Select, Option,
    Image, FileInput, FileInputContainer, ImageContainer
} from './style';
import Modal from '../modal/index';
import Alert from '../alert/index';

const Register = ({ origin, title }) => {
    const {showAlert, showModal,
        setAlertConfig, alertConfig } = useContext(mainContext);
    const [image, setImage] = useState('');
    const [waitingResponse, setWaitingResponse] = useState('');
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [launchDate, setLaunchDate] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
        if (alertConfig.response) {
            if (waitingResponse === 'image') {
                if (alertConfig.response === 'true') {
                    setImage('');
                }
            }
        }
    }, [alertConfig, waitingResponse]);

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

      if (!quantity) {
        setAlertConfig({
          'type': 'alert',
          'title': 'Não é possível continuar',
          'text': 'Quantidade é obrigatório!',
          'show': 'flex'
        })
        return;
      }

      if (!launchDate) {
        setAlertConfig({
          'type': 'alert',
          'title': 'Não é possível continuar',
          'text': 'Data de lançamento é obrigatório!',
          'show': 'flex'
        })
        return;
      }

      const object = {
        name: name,
        quantity: quantity,
        launchDate: launchDate
      }

      fetch("http://localhost/api/Produtos.php")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
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
                  <FieldLabel>Nome do Item:</FieldLabel>
                  <Field onChange={(e) => setName(e.target.value)} columns="2" type="text"/>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Quantidade:</FieldLabel>
                  <Field onChange={(e) => setQuantity(e.target.value)} columns="2" type="number"></Field>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Data de Lançamento:</FieldLabel>
                  <Field onChange={(e) => setLaunchDate(e.target.value)} columns="2" type="date"/>
                </FieldContainer>
                <FieldContainer>
                  <Select columns="2" onChange={(e) => setType(e.target.value)}>
                      <Option>Produto</Option>
                      <Option>Serviço</Option>
                  </Select>
                </FieldContainer>
                <FileInputContainer>
                  <FileInput type="file" onChange={(e) => handleChange(e)} />
                  <ImageContainer onClick={() => removeImage()}>
                      {image && (
                          <Image src={image} />
                      )}
                  </ImageContainer>
                </FileInputContainer>
              </DivFields>
              <DivButtonForm>
                  <ButtonForm>Cadastrar</ButtonForm>
                  <ButtonForm>Cancelar</ButtonForm>
              </DivButtonForm>
          </Container>
    );
}

export default Register;