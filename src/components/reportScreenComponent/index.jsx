import React, { useContext, useState, useEffect } from "react";

import produce from "immer";

import mainContext from "../../context/context";
import salesContext from "../../context/salesContext";

import {
    Container, DivTitle, Title, FieldContainer, FieldLabel,
    Field, DivFields, DivButtonForm, ButtonForm, Select, Option,
    ProductsListContainer, ProductsListButtonsContainer,
    ProductsList, Line, Cell, HeadCell, ProductListDiv, TextAreaField,
    Image, FileInput, FileInputContainer, ImageContainer, TableButton,
    ButtonReport
} from './style';
import Modal from '../modal/index';
import Alert from '../alert/index';
import AdvancedFilter from '../advancedFilter/index';

import { fields, TableColumns } from '../../data/index';

import px2vw from "../../utils/px2vw";
import ReportPopup from "../reportPopup";

const Register = ({ origin, title }) => {
    const { actualPage, setShowAlert, showAlert, showModal, setShowModal,
        setAlertConfig, alertConfig } = useContext(mainContext);
    const [saleProducts, setSaleProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [operation, setOperation] = useState('');
    const [image, setImage] = useState('');
    const [waitingResponse, setWaitingResponse] = useState('');
    const [columns, setColumns] = useState(2);
    const [showDetails, setShowDetails] = useState('none');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (alertConfig.response) {
            if (waitingResponse === 'image') {
                if (alertConfig.response === 'true') {
                    setImage('');
                }
            }
            if (waitingResponse === 'delete') {
                if (alertConfig.response === 'true') {

                }
            }
        }
    }, [alertConfig, waitingResponse]);

    useEffect(() => {
        if (origin === 'reversal' || origin === 'report') {
            setColumns(1);
        } else {
            setColumns(2);
        }
    }, [origin]);

    const showItens = (changeOperation) => {
        if ((changeOperation === 'edit' && selectedProduct && selectedProduct > 0) || changeOperation === 'insert') {
            setOperation(changeOperation);
            setShowModal('flex');
        } else {
            setAlertConfig({
                'type': 'alert',
                'title': 'Não é possível continuar',
                'text': 'Selecione um produto para fazer a edição!',
                'show': 'flex'
            })
        }
    }

    const setProduct = (code) => {
        if (code === selectedProduct) {
            setSelectedProduct('');
            return;
        }
        setSelectedProduct(code);
    }


    const removeProduct = () => {
        if (!selectedProduct) {
            setAlertConfig({
                'type': 'alert',
                'title': 'Não é possível continuar.',
                'text': 'Para remover algum item da lista, selecione o mesmo primeiro.',
                'show': 'flex',
                'response': 'false'
            });
            setShowAlert('flex');
        }
        setSaleProducts(produce(saleProducts, draft => {
            draft.forEach((item, code) => {
                if (item.code === selectedProduct) {
                    draft.splice(code, 1);
                }
                setSelectedProduct('');
            })
        }));
    }

    const handleChange = (e, item) => {
        if (item.type === 'file') {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
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

    return (
        <salesContext.Provider value={{
            saleProducts,
            setSaleProducts,
            selectedProduct,
            setShowModal,
            operation,
            isDeleting,
            setIsDeleting
        }}>
            <Container>
                <Alert showAlert={showAlert} />
                <Modal showModal={showModal} />
                <ReportPopup show={showDetails}/>
                <DivTitle>
                    <Title>{title}</Title>
                </DivTitle>
                <AdvancedFilter />
                <DivFields columns={columns}>
                <FieldContainer>
                  <FieldLabel>Assistente:</FieldLabel>
                  <Select columns="2">
                      <Option value="Nenhum">Clientes</Option>
                      <Option value="1">Funcionários</Option>
                  </Select>
                </FieldContainer>
                </DivFields>
                <ProductsListContainer>
                    <ProductListDiv>
                        <ProductsList>
                            <tbody>
                                {TableColumns.map((item, index) =>
                                    <Line key={index} id={item.code} onClick={() => setProduct(item.code)} selected={(item.code === selectedProduct ? true : false)}>
                                        <HeadCell width={px2vw(200)} id={item.code}>{item.code}</HeadCell>
                                        <HeadCell width={px2vw(650)} id={item.code}>{item.name}</HeadCell>
                                        <HeadCell width={px2vw(150)} id={item.code}><ButtonReport onClick={() => setShowDetails('flex')}>Detalhes</ButtonReport></HeadCell>
                                    </Line>
                                )}
                            </tbody>
                        </ProductsList>
                    </ProductListDiv>
                </ProductsListContainer>
                <DivButtonForm>
                    <ButtonForm>{actualPage === "report" ? "Buscar" : "Cadastrar"}</ButtonForm>
                    <ButtonForm>Cancelar</ButtonForm>
                </DivButtonForm>
            </Container>
        </salesContext.Provider>
    );
}

export default Register;