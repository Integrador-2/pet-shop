import React, { useContext, useState } from "react";

import pageContext from "../../context/context";
import salesContext from "../../context/salesContext";

import {
    Container, DivTitle, Title, FieldContainer, FieldLabel,
    Field, DivFields, DivButtonForm, ButtonForm, Select, Option,
    ProductsListContainer, ProductsListButtonsContainer,
    ProductsList, Line, Cell, HeadCell, ProductListDiv
} from './style';
import Modal from '../modal/index';
import { fields } from '../../data/index';

const Register = ({ origin, title }) => {
    const { actualPage } = useContext(pageContext);
    const [showModal, setShowModal] = useState('none');
    const [saleProducts, setSaleProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');


    const showItens = () => {
        setShowModal('flex');
    }

    const setProduct = (code) => {
        setSelectedProduct(code);
    }


    return (
        <salesContext.Provider value={{
            saleProducts,
            setSaleProducts,
            selectedProduct,
            setShowModal
        }}>
            <Container>
                <Modal showModal={showModal} />
                <DivTitle>
                    <Title>{title}</Title>
                </DivTitle>
                <DivFields>
                    {
                        fields.map((item, index) => item.origin === origin &&
                            <FieldContainer>
                                <FieldLabel>{item.label}</FieldLabel>
                                {item.type !== 'select' ? (
                                    <Field id={item.id} type={item.type} />
                                ) : (
                                        <Select id={item.id}>
                                            {item.options.map((value, key) =>
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
                            <ButtonForm onClick={() => showItens()}>Inserir</ButtonForm>
                            <ButtonForm onClick={() => showItens()}>Editar</ButtonForm>
                            <ButtonForm>Remover</ButtonForm>
                        </ProductsListButtonsContainer>
                        <ProductListDiv>
                            <ProductsList>
                                <tbody>
                                    <Line>
                                        <HeadCell width="200px">Código</HeadCell>
                                        <HeadCell width="600px">Nome</HeadCell>
                                        <HeadCell width="200px">Quantidade</HeadCell>
                                    </Line>
                                    {saleProducts.map((item) =>
                                        <Line>
                                            <Cell id={item.code} onClick={() => setProduct(item.code)}>{item.code}</Cell>
                                            <Cell id={item.code} onClick={() => setProduct(item.code)}>{item.name}</Cell>
                                            <Cell id={item.code} onClick={() => setProduct(item.code)}>{item.quantity}</Cell>
                                            <Cell id={item.code} onClick={() => setProduct(item.code)}>{item.price}</Cell>
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