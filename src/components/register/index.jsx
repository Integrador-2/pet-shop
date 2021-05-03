import React, { useContext, useState } from "react";

import produce from "immer";

import mainContext from "../../context/context";
import salesContext from "../../context/salesContext";

import {
    Container, DivTitle, Title, FieldContainer, FieldLabel,
    Field, DivFields, DivButtonForm, ButtonForm, Select, Option,
    ProductsListContainer, ProductsListButtonsContainer,
    ProductsList, Line, Cell, HeadCell, ProductListDiv
} from './style';
import Modal from '../modal/index';
import Alert from '../alert/index';

import { fields } from '../../data/index';

const Register = ({ origin, title }) => {
    const { actualPage, setShowAlert, showAlert, showModal, setShowModal, setAlertTitle,
        setAlertText, setAlertType } = useContext(mainContext);    
    const [saleProducts, setSaleProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [operation, setOperation] = useState('');    

    const showItens = (changeOperation) => {
        if ((changeOperation === 'edit' && selectedProduct && selectedProduct > 0) || changeOperation === 'insert') {
            setOperation(changeOperation);
            setShowModal('flex');
        } else {
            setAlertTitle('Não é possível continuar');
            setAlertText('Selecione um produto para fazer a edição!');
            setAlertType('alert');
            setShowAlert('flex');
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
            setAlertTitle('Não é possível continuar.');
            setAlertType('alert');
            setAlertText('Para remover algum item da lista, selecione o mesmo primeiro.');
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
                <DivFields>
                    {
                        fields.map((item, index) => item.origin === origin &&
                            <FieldContainer key={index}>
                                <FieldLabel>{item.label}</FieldLabel>
                                {item.type !== 'select' ? (
                                    <Field id={item.id} type={item.type} />
                                ) : (
                                        <Select id={item.id}>
                                            {item.options.forEach((value, key) =>
                                                <Option>{value.value}</Option>
                                            )}
                                        </Select>
                                    )}
                            </FieldContainer>
                        )
                    }
                </DivFields>
                {actualPage === 'service' &&
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
                                        <HeadCell width="200px">Código</HeadCell>
                                        <HeadCell width="550px">Nome</HeadCell>
                                        <HeadCell width="150px">Quantidade</HeadCell>
                                        <HeadCell width="100px">Preço</HeadCell>
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
                <DivButtonForm>
                    <ButtonForm>Cadastrar</ButtonForm>
                    <ButtonForm>Cancelar</ButtonForm>
                </DivButtonForm>
            </Container>
        </salesContext.Provider>
    );
}

export default Register;