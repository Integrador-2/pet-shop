import React, { useContext, useState } from "react";

import Alert from "../alert/index";

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

    const {showAlert, handleChangePage } = useContext(mainContext);

    const handleInsert = () => {
        if (origin === 'client') {
            handleChangePage('client/edit/');
        }
        if (origin === 'employee') {
            handleChangePage('employee/register/');
        }
        if (origin === 'supplier') {
            handleChangePage('supplier/register');
        }
        if (origin === 'service') {
            handleChangePage('service/register');
        }
        if (origin === 'product') {
            handleChangePage('product/register/');
        }
    }


    return (
        <Container>
            <Alert showAlert={showAlert} />
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