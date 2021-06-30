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
    const [serviceDetails, setServiceDetails] = useState("");
    const [reasonReversal, setreasonReversal] = useState("");
    const [serverNumber, setServerNumber] = useState("Produto");
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
        setServiceDetails(actualProduct.quantidade);
        setreasonReversal(actualProduct.data_lancamento);
        setServerNumber(actualProduct.tipo_produto);
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

      if (!serviceDetails) {
        setAlertConfig({
          'type': 'alert',
          'title': 'Não é possível continuar',
          'text': 'Quantidade é obrigatório!',
          'show': 'flex'
        })
        return;
      }

      if (!reasonReversal) {
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
        quantidade: serviceDetails,
        data_lancamento: reasonReversal,
        tipo_produto: serverNumber,
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
                  <FieldLabel>Nº do Serviço:</FieldLabel>
                  <Select columns="1" onChange={(e) => setServerNumber(e.target.value)}>
                      <Option selected={serverNumber === '1' ? true : false} value="1">1</Option>
                      <Option selected={serverNumber === '2' ? true : false} value="2">2</Option>
                  </Select>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Detalhes do Serviço:</FieldLabel>
                  <Field value={serviceDetails} onChange={(e) => setServiceDetails(e.target.value)} columns="1" type="number"></Field>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Motivo do Estorno:</FieldLabel>
                  <Field value={reasonReversal} onChange={(e) => setreasonReversal(e.target.value)} columns="1" type="date"/>
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