import axios from "axios";
import React, { useContext, useState, useEffect } from "react";

import Alert from "../alert/index";

import {
    ProductsListContainer, ProductsListButtonsContainer, ButtonForm, ProductListDiv,
    ProductsList, Line, HeadCell, Cell, DivTitle, Title, Container
} from "../register/style";
import { Table, TableContainer, TableLine } from "./style";

import { ListFields, ListValues } from "../../data/index";
import px2vw from "../../utils/px2vw";

import mainContext from "../../context/context";


const ListSupplierComponent = ({ origin, title }) => {

    useEffect(() => {
        axios.post(`http://localhost/petshop/pet-shop/src/api/fornecedores/getAll`, {                    
        }).then((response) => {
            setValues(response.data.dados);
        });
    }, [])

    const [values, setValues] = useState();

    const [selectedLine, setSelectedLine] = useState('');

    const {showAlert, handleChangePage } = useContext(mainContext);

    const handleInsert = () => {
        handleChangePage('product/register/');
    }


    return (
        <Container>
            <Alert showAlert={showAlert} />
            <DivTitle>
                <Title>{title}</Title>
            </DivTitle>
            <ProductsListContainer>
                <TableContainer>                    
                    <Table height={50 * 3}>
                        <tbody>
                            <TableLine>                                                                    
                                <HeadCell width="100">Código</HeadCell>
                                <HeadCell width="500">Nome</HeadCell>
                                <HeadCell width="250">E-mail</HeadCell>
                                <HeadCell width="150">Telefone</HeadCell>
                            </TableLine>
                            {values &&
                            values.map((item, key) =>                                                                
                                <TableLine onClick={() => setSelectedLine(item.id)} selected={selectedLine === item.id ? true : false}>                                    
                                    <Cell id={item.id}>{item.id}</Cell>                                    
                                    <Cell id={item.id}>{item.nome}</Cell>                                    
                                    <Cell id={item.id}>{item.email}</Cell>                                    
                                    <Cell id={item.id}>{item.telefone}</Cell>                                    
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

export default ListSupplierComponent;