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


const ListProductsComponent = ({ origin, title }) => {

    const [values, setValues] = useState();

    const [isDeleting, setIsDeleting] = useState(false);

    const [waitingResponse, setWaitingResponse] = useState(false);

    const [selectedLine, setSelectedLine] = useState('');

    const {showAlert, handleChangePage, setAlertConfig, alertConfig } = useContext(mainContext);

    useEffect(() => {
        axios.post(`http://localhost/petshop/pet-shop/src/api/produtos/getAll`, {                    
        }).then((response) => {
            setValues(response.data.dados);
        });
    }, [])

    useEffect(() => {
        if (alertConfig.response) {
            if (waitingResponse === 'delete') {
                if (alertConfig.response === 'true') {
                    setIsDeleting(true);
                }
            }
        }
    }, [alertConfig, waitingResponse]);

    useEffect(() => {
        if (isDeleting) {
            axios.post(`http://localhost/petshop/pet-shop/src/api/produtos/excluir`, {          
            dados: selectedLine        
            }).then((response) => {
                console.log(response.request.responseText);
                axios.post(`http://localhost/petshop/pet-shop/src/api/produtos/getAll`, {                    
                }).then((response) => {
                    setValues(response.data.dados);
                });
            });
            setIsDeleting(false);
        }
    }, [isDeleting])

    const handleInsert = () => {
        handleChangePage('product/register/');
    }

    const handleEdit = () => {
        handleChangePage(`product/register/${selectedLine}`);
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
                                <HeadCell width="100">Código</HeadCell>
                                <HeadCell width="500">Nome</HeadCell>
                                <HeadCell width="200">Tipo</HeadCell>
                                <HeadCell width="100">Preço</HeadCell>
                                <HeadCell width="80">Estoque</HeadCell>
                            </TableLine>
                            {values &&
                            values.map((item, key) =>                                                                
                                <TableLine onClick={() => setSelectedLine(item.id)} selected={selectedLine === item.id ? true : false}>                                    
                                    <Cell id={item.id}>{item.id}</Cell>                                    
                                    <Cell id={item.id}>{item.descricao}</Cell>                                    
                                    <Cell id={item.id}>{item.tipo_produto}</Cell>                                    
                                    <Cell id={item.id}>{item.preco ? parseFloat(item.preco).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) : 'R$ 0,00'}</Cell>                                    
                                    <Cell id={item.id}>{item.quantidade}</Cell>                                    
                                </TableLine>
                            )}
                        </tbody>
                    </Table>
                </TableContainer>
                <ProductsListButtonsContainer>
                    <ButtonForm onClick={() => handleInsert()}>Inserir</ButtonForm>
                    <ButtonForm onClick={() => handleEdit()}>Editar</ButtonForm>
                    <ButtonForm onClick={() => handleDelete()}>Remover</ButtonForm>
                </ProductsListButtonsContainer>
            </ProductsListContainer>
        </Container >
    );
}

export default ListProductsComponent;