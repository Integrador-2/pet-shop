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


const ListClientsComponent = ({ origin, title }) => {

    
    const [values, setValues] = useState();
    
    const [selectedLine, setSelectedLine] = useState('');

    const [waitingResponse, setWaitingResponse] = useState(false);
    
    const {showAlert, handleChangePage, setAlertConfig } = useContext(mainContext);

    useEffect(() => {
        axios.post(`http://localhost/api/clientes/getAllComEntidades`, {
        }).then((response) => {
            setValues(response.data.dados);     
        });        
    }, [])

    const handleInsert = () => {
        handleChangePage('client/register/');
    }

    const handleEdit = () => {
        handleChangePage(`clients/register/${selectedLine}`);
    }

    const handleDelete = () => {
        setAlertConfig({
            'type': 'confirm',
            'title': 'Tem certeza que deseja efetuar essa ação?',
            'text': 'Tem certeza que deseja excluir esse registro?',
            'show': 'flex',
            'response': 'false'
        });
        setWaitingResponse('delete');        
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
                                <HeadCell width="125">Código</HeadCell>
                                <HeadCell width="525">Nome</HeadCell>
                                <HeadCell width="175">Telefone</HeadCell>
                                <HeadCell width="140">Gênero</HeadCell>                                
                            </TableLine>
                            {values &&
                            values.map((item, key) =>                                                                
                                <TableLine onClick={() => setSelectedLine(item.id)} selected={selectedLine === item.id ? true : false}>                                    
                                    <Cell id={item.id}>{item.id}</Cell>                                    
                                    <Cell id={item.id}>{item.nome}</Cell>                                    
                                    <Cell id={item.id}>{item.telefone}</Cell>                                    
                                    <Cell id={item.id}>{item.genero}</Cell>                                                                        
                                </TableLine>
                            )}
                        </tbody>
                    </Table>
                </TableContainer>
                <ProductsListButtonsContainer>
                    <ButtonForm onClick={() => handleInsert()}>Inserir</ButtonForm>
                    <ButtonForm onClick={() => handleEdit()}>Editar</ButtonForm>
                    <ButtonForm>Remover</ButtonForm>
                </ProductsListButtonsContainer>
            </ProductsListContainer>
        </Container >
    );
}

export default ListClientsComponent;