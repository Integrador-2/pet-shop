import axios from "axios";
import React, { useContext, useState, useEffect } from "react";

import mainContext from "../../context/context";

import {
    Container, DivTitle, Title, FieldContainer, FieldLabel,
    Field, DivFields, DivButtonForm, ButtonForm, Select, Option,
    Image, FileInput, FileInputContainer, ImageContainer
} from './style';
import Modal from '../modal/index';
import Alert from '../alert/index';

const RegisterProductComponent = ({ product, title }) => {
    const {showAlert, showModal,
        setAlertConfig, alertConfig } = useContext(mainContext);
    const [image, setImage] = useState('');
    const [waitingResponse, setWaitingResponse] = useState('');
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [launchDate, setLaunchDate] = useState("");
    const [type, setType] = useState("Produto");
    const [price, setPrice] = useState("");
    const [object, setObject] = useState();

    const [doing, setDoing] = useState(product ? 'edit' : 'insert');

    const [actualProduct, setActualProduct] = useState();

    useEffect(() => {
      if(product) {   
        axios.post(`http://localhost/petshop/pet-shop/src/api/produtos/getById`, {          
          dados: product
        }).then((response) => {
            setActualProduct(response.data.dados);
            console.log(response.request.responseText);
        });
      }
    }, [])

    useEffect(() => {
      if (actualProduct) {
        setName(actualProduct.descricao);
        setQuantity(actualProduct.quantidade);
        setLaunchDate(actualProduct.data_lancamento);
        setType(actualProduct.tipo_produto);
        setPrice(actualProduct.preco);
      }
    }, [actualProduct])

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
      console.log(doing);
      if (object && doing === 'insert') {
        axios.post(`http://localhost/petshop/pet-shop/src/api/produtos/cadastrar`, {          
          dados: object        
        }).then((response) => {
            console.log(response);
        });
      } else {
        axios.post(`http://localhost/petshop/pet-shop/src/api/produtos/atualizar`, {          
          dados: object        
        }).then((response) => {
            console.log(response);
        });
      }
    }, [object])

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

      if (!price) {
        setAlertConfig({
          'type': 'alert',
          'title': 'Não é possível continuar',
          'text': 'Preço é obrigatório!',
          'show': 'flex'
        })
        return;
      }

      setObject({
        descricao: name,
        quantidade: quantity,
        data_lancamento: launchDate,
        tipo_produto: type,
        preco: price,
        id: product ? product : null
      });

      console.log(object);
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
                  <Field value={name} onChange={(e) => setName(e.target.value)} columns="2" type="text"/>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Quantidade:</FieldLabel>
                  <Field value={quantity} onChange={(e) => setQuantity(e.target.value)} columns="2" type="number"></Field>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Data de Lançamento:</FieldLabel>
                  <Field value={launchDate} onChange={(e) => setLaunchDate(e.target.value)} columns="2" type="date"/>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Tipo:</FieldLabel>
                  <Select columns="2" onChange={(e) => setType(e.target.value)}>
                      <Option selected={type === 'Produto' ? true : false} value="Produto">Produto</Option>
                      <Option selected={type === 'Serviço' ? true : false} value="Serviço">Serviço</Option>
                  </Select>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Preço:</FieldLabel>
                  <Field value={price} onChange={(e) => setPrice(e.target.value)} type="text"></Field>
                </FieldContainer>
                <FieldContainer>
                  <FileInputContainer>
                    <FileInput type="file" onChange={(e) => handleChange(e)} />
                    <ImageContainer onClick={() => removeImage()}>
                        {image && (
                            <Image src={image} />
                        )}
                    </ImageContainer>
                  </FileInputContainer>
                </FieldContainer>
              </DivFields>
              <DivButtonForm>
                  <ButtonForm onClick={() => handleInsert()}>Cadastrar</ButtonForm>
                  <ButtonForm>Cancelar</ButtonForm>
              </DivButtonForm>
          </Container>
    );
}

export default RegisterProductComponent;