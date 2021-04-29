import React, { useContext, useState } from "react";

import pageContext from "../../context/context";

import { products } from '../../data/index';

import { Container, ModalScreen, FilterContainer, Filter, Label, Field, Button, Img } from './style';
import { ProductsList, HeadCell, Cell, Line } from '../register/style';

import Image from './confirme.svg';

const Modal = ({ showModal }) => {

    const { setShowModal } = useContext(pageContext);
    const [ code, setCode ] = useState('');
    const [ name, setName ] = useState('');
    const hideModal = () => {
        setShowModal('none');
    }    
    const setProduct = (code) => {
        if (code) {
            products.map((item) => {
                if (item.code === code) {
                    setCode(item.code);
                    setName(item.name);
                }
            });
        }
    }
    const doNothing = () => {

    }
    return (
        <Container display={showModal} onClick={() => hideModal()}>
            <ModalScreen onClick={() => doNothing()}>
                <FilterContainer>
                    <Filter width="100px">
                        <Label>Código</Label>
                        <Field value={code}/>
                    </Filter>
                    <Filter>
                        <Label>Nome</Label>
                        <Field value={name} />
                    </Filter>
                    <Filter width="100px">
                        <Label>Quantidade</Label>
                        <Field value='0' />
                    </Filter>
                    <Button onClick={() => hideModal()}>
                        <Img src={Image} />
                    </Button>
                </FilterContainer>
                <ProductsList>                    
                    <tbody>
                        <Line>
                            <HeadCell width="200px">Código</HeadCell>
                            <HeadCell width="550px">Nome</HeadCell>
                            <HeadCell width="150px">Quantidade</HeadCell>
                            <HeadCell width="100px">Preço</HeadCell>
                        </Line>
                        {products.map((item, index) =>                          
                            <Line>
                                <Cell id={item.code} onClick={() => setProduct(item.code)}>{item.code}</Cell>
                                <Cell id={item.code} onClick={() => setProduct(item.code)}>{item.name}</Cell>
                                <Cell id={item.code} onClick={() => setProduct(item.code)}>{item.quantity}</Cell>
                                <Cell id={item.code} onClick={() => setProduct(item.code)}>{item.price}</Cell>
                            </Line>
                        )}                    
                    </tbody>
                </ProductsList>
            </ModalScreen>
        </Container>
    );
}

export default Modal;