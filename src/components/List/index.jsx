import React, { useContext } from "react";

import {
    ProductsListContainer, ProductsListButtonsContainer, ButtonForm, ProductListDiv,
    ProductsList, Line, HeadCell, Cell, DivTitle, Title, Container
} from "../register/style";

import { ListFields, ListValues } from "../../data/index";
import px2vw from "../../utils/px2vw";

import mainContext from "../../context/context";


const List = ({ origin, title }) => {

    const { setActualPage } = useContext(mainContext);

    const handleInsert = () => {
        if (origin === 'client') {
            setActualPage('registerClient');
        }
        if (origin === 'employee') {
            setActualPage('registerEmployee');
        }
        if (origin === 'suplier') {
            setActualPage('registerSuplier');
        }
        if (origin === 'service') {
            setActualPage('registerService');
        }
        if (origin === 'product') {
            setActualPage('registerProduct');
        }
    }


    return (
        <Container>
            <DivTitle>
                <Title>{title}</Title>
            </DivTitle>
            <ProductsListContainer>
                <ProductsListButtonsContainer>
                    <ButtonForm onClick={() => handleInsert()}>Inserir</ButtonForm>
                    <ButtonForm>Editar</ButtonForm>
                    <ButtonForm>Remover</ButtonForm>
                </ProductsListButtonsContainer>
                <ProductListDiv>
                    <ProductsList>
                        <tbody>
                            <Line>
                                {ListFields.map((item) =>
                                    item.origin === origin &&
                                    <HeadCell width={px2vw(item.width)}>{item.title}</HeadCell>
                                )}
                            </Line>
                            {ListValues.map((item) =>
                                item.origin === origin &&
                                <Line>
                                    {Object.keys(item).map((value) =>
                                        value !== 'origin' &&
                                        <Cell>{item[value]}</Cell>
                                    )}
                                </Line>
                            )}
                        </tbody>
                    </ProductsList>
                </ProductListDiv>
            </ProductsListContainer>
        </Container >
    );
}

export default List;