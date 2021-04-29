import React, { useContext } from "react";

import pageContext from "../../context/context";

import {
    Container, DivTitle, Title, FieldContainer, FieldLabel,
    Field, DivFields, DivButtonForm, ButtonForm, Select, Option,
    ProductsListContainer, ProductsListButtonsContainer,
    ProductsList, Line, Cell, HeadCell, ProductListDiv
} from './style';
import { fields } from '../../data/index';

const Register = ({ origin, title }) => {
    const { setShowModal, actualPage } = useContext(pageContext);
    const showModal = () => {
        setShowModal('flex');
    }

    return (
        <Container>
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
                        <ButtonForm onClick={() => showModal()}>Inserir</ButtonForm>
                        <ButtonForm onClick={() => showModal()}>Editar</ButtonForm>
                        <ButtonForm>Remover</ButtonForm>
                    </ProductsListButtonsContainer>
                    <ProductListDiv>
                        <ProductsList>
                            <Line>
                                <HeadCell width="200px">Código</HeadCell>
                                <HeadCell width="600px">Nome</HeadCell>
                                <HeadCell width="200px">Quantidade</HeadCell>
                            </Line>
                        </ProductsList>
                    </ProductListDiv>
                </ProductsListContainer>
            }
            <DivButtonForm>
                <ButtonForm>Cadastrar</ButtonForm>
                <ButtonForm>Cancelar</ButtonForm>
            </DivButtonForm>
        </Container>
    );
}

export default Register;