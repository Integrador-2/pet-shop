import React, { useContext } from "react";

import pageContext from "../../context/context";

import { products } from '../../data/index';

import { Container, ModalScreen, FilterContainer, Filter, Label, Field, Button, Img } from './style';
import { ProductsList, HeadCell, Cell, Line } from '../register/style';

import Image from './confirme.svg';

const Modal = ({ showModal }) => {

    const { setShowModal } = useContext(pageContext);
    const hideModal = () => {
        setShowModal('none');
    }

    return (
        <Container display={showModal}>
            <ModalScreen>
                <FilterContainer>
                    <Filter width="100px">
                        <Label>Código</Label>
                        <Field />
                    </Filter>
                    <Filter>
                        <Label>Nome</Label>
                        <Field />
                    </Filter>
                    <Filter width="100px">
                        <Label>Quantidade</Label>
                        <Field />
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
                        {products.map((item, key) => {
                            console.log(products);
                            <Line>
                                <Cell>item.code</Cell>
                                <Cell>item.name</Cell>
                                <Cell>item.quantity</Cell>
                                <Cell>item.price</Cell>
                            </Line>
                        })}
                    </tbody>
                </ProductsList>
            </ModalScreen>
        </Container>
    );
}

export default Modal;