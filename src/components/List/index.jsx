import React, { useContext, useState } from "react";

import {
    ProductsListContainer, ProductsListButtonsContainer, ButtonForm, ProductListDiv,
    ProductsList, Line, HeadCell, Cell, DivTitle, Title, Container
} from "../register/style";
import { Table, TableContainer, TableLine } from "./style";

import { ListFields, ListValues } from "../../data/index";
import px2vw from "../../utils/px2vw";

import mainContext from "../../context/context";


const List = ({ origin, title }) => {

    const [selectedLine, setSelectedLine] = useState('');

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
                <TableContainer>
                    {console.log(ListValues.length)}
                    <Table height={50 * 3}>
                        <tbody>
                            <TableLine>
                                {ListFields.map((item) =>
                                    item.origin === origin &&
                                    <HeadCell width={px2vw(item.width)}>{item.title}</HeadCell>
                                )}
                            </TableLine>
                            {ListValues.map((item) =>
                                item.origin === origin &&
                                <TableLine onClick={() => setSelectedLine(item.code)} selected={selectedLine === item.code ? true : false}>
                                    {Object.keys(item).map((value) =>
                                        value !== 'origin' &&
                                        <Cell id={item.code}>{item[value]}</Cell>
                                    )}
                                </TableLine>
                            )}
                        </tbody>
                    </Table>
                </TableContainer>
                <ProductsListButtonsContainer>
                    <ButtonForm onClick={() => handleInsert()}>Inserir</ButtonForm>
                    <ButtonForm>Editar</ButtonForm>
                    <ButtonForm>Remover</ButtonForm>
                </ProductsListButtonsContainer>
            </ProductsListContainer>
        </Container >
    );
}

export default List;