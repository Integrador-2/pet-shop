import React, { useContext, useState, useEffect } from "react";

import produce from "immer";

import mainContext from "../../context/context";
import salesContext from "../../context/salesContext";

import {
    Container, DivTitle, Title, FieldContainer, FieldLabel,
    Field, DivFields, DivButtonForm, ButtonForm, Select, Option,
    ProductsListContainer, ProductsListButtonsContainer,
    ProductsList, Line, Cell, HeadCell, ProductListDiv, TextAreaField,
    Image, FileInput, FileInputContainer, ImageContainer, TableButton
} from './style';
import Modal from '../modal/index';
import Alert from '../alert/index';
import AdvancedFilter from '../advancedFilter/index';

import { fields, TableColumns } from '../../data/index';

import px2vw from "../../utils/px2vw";

const Register = ({ origin, title }) => {
    const { actualPage, setShowAlert, showAlert, showModal, setShowModal,
        setAlertConfig, alertConfig } = useContext(mainContext);
    const [saleProducts, setSaleProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [operation, setOperation] = useState('');
    const [image, setImage] = useState('');
    const [waitingResponse, setWaitingResponse] = useState('');
    const [columns, setColumns] = useState(2);

    console.log(origin);

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
            operation
        }}>
            <Container>
                <Alert showAlert={showAlert} />
                <Modal showModal={showModal} />
                <DivTitle>
                    <Title>{title}</Title>
                </DivTitle>
                {actualPage === "report" &&
                    <AdvancedFilter />
                }
                <DivFields columns={columns}>
                    {
                        fields.map((item, index) => item.origin === origin &&
                            <FieldContainer key={index}>
                                <FieldLabel>{item.label}</FieldLabel>
                                {(item.type !== 'select' && item.type !== 'textarea' && item.type !== 'file') && (
                                    <Field columns={columns} id={item.id} type={item.type} />
                                )}
                                {item.type === 'select' && (
                                    <Select columns={columns} id={item.id}>
                                        {item.options.map((value) =>
                                            <Option>{value.value}</Option>
                                        )}
                                    </Select>
                                )}
                                {item.type === 'textarea' && (
                                    <TextAreaField columns={columns} rows="3" id={item.id}></TextAreaField>
                                )}
                                {item.type === 'file' && (
                                    <FileInputContainer>
                                        <FileInput id={item.id} type={item.type} onChange={(e) => handleChange(e, item)} />
                                        <ImageContainer onClick={() => removeImage()}>
                                            {image && (
                                                <Image src={image} />
                                            )}
                                        </ImageContainer>
                                    </FileInputContainer>
                                )}
                            </FieldContainer>
                        )
                    }
                </DivFields>
                {actualPage === 'registerService' &&
                    <ProductsListContainer>
                        <ProductsListButtonsContainer>
                            <ButtonForm onClick={() => showItens('insert')}>Inserir</ButtonForm>
                            <ButtonForm onClick={() => showItens('edit')}>Editar</ButtonForm>
                            <ButtonForm onClick={() => removeProduct()}>Remover</ButtonForm>
                        </ProductsListButtonsContainer>
                        <ProductListDiv>
                            <ProductsList>
                                <tbody>
                                    <Line>
                                        <HeadCell width={px2vw(200)}>Código</HeadCell>
                                        <HeadCell width={px2vw(560)}>Nome</HeadCell>
                                        <HeadCell width={px2vw(140)}>Quantidade</HeadCell>
                                        <HeadCell width={px2vw(100)}>Preço</HeadCell>
                                    </Line>
                                    {saleProducts.map((item, index) =>
                                        <Line key={index} id={item.code} onClick={() => setProduct(item.code)} selected={(item.code === selectedProduct ? true : false)}>
                                            <Cell id={item.code}>{item.code}</Cell>
                                            <Cell id={item.code}>{item.name}</Cell>
                                            <Cell id={item.code}>{item.quantity}</Cell>
                                            <Cell id={item.code}
                                                onClick={() => setProduct(item.code)}>
                                                {(parseFloat(item.price))
                                                    .toLocaleString('pt-BR',
                                                        { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</Cell>
                                        </Line>
                                    )}
                                </tbody>
                            </ProductsList>
                        </ProductListDiv>
                    </ProductsListContainer>
                }
                {actualPage === 'report' &&
                    <ProductsListContainer>
                        <ProductListDiv>
                            <ProductsList>
                                <tbody>
                                    {TableColumns.map((item, index) =>
                                        <Line key={index} id={item.code} onClick={() => setProduct(item.code)} selected={(item.code === selectedProduct ? true : false)}>
                                            <HeadCell width={px2vw(200)} id={item.code}>{item.code}</HeadCell>
                                            <HeadCell width={px2vw(650)} id={item.code}>{item.name}</HeadCell>
                                            <HeadCell width={px2vw(150)} id={item.code}><TableButton><label>Detalhes</label></TableButton></HeadCell>
                                        </Line>
                                    )}
                                </tbody>
                            </ProductsList>
                        </ProductListDiv>
                    </ProductsListContainer>
                }
                <DivButtonForm>
                    <ButtonForm>{actualPage === "report" ? "Buscar" : "Cadastrar"}</ButtonForm>
                    <ButtonForm>Cancelar</ButtonForm>
                </DivButtonForm>
            </Container>
        </salesContext.Provider>
    );
}

export default Register;