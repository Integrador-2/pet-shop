import React, { useContext, useState } from "react";

import saleContext from "../../context/salesContext";

import { products } from '../../data/index';

import { Container, ModalScreen, FilterContainer, Filter, Label, Field, Button, Img } from './style';
import { ProductsList, HeadCell, Cell, Line } from '../register/style';

import Image from './confirme.svg';

const Modal = ({ showModal }) => {

    const { setShowModal, saleProducts, setSaleProducts, selectedProduct } = useContext(saleContext);
    if (selectedProduct) {
        console.log(`teste`);
    }
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const hideModal = () => {
        setShowModal('none');
    }
    const setProduct = (id) => {
        if (id) {
            products.map((item) => {
                if (item.code === id) {
                    setCode(item.code);
                    setName(item.name);
                    console.log(id + ' - ' + name + ' - ' + code);
                }
            });
        }
    }

    return (
        <Container display={showModal}>
            <ModalScreen>
                <FilterContainer>
                    <Filter width="100px">
                        <Label>Código</Label>
                        <Field value={code} />
                    </Filter>
                    <Filter>
                        <Label>Nome</Label>
                        <Field text={name} />
                    </Filter>
                    <Filter width="100px">
                        <Label>Quantidade</Label>
                        <Field text='0' />
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
        </Container >
    );
}

export default Modal;