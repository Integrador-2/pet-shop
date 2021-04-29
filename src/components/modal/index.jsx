import React, { useContext } from "react";

import pageContext from "../../context/context";

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
                    <Line>
                        <HeadCell width="200px">Código</HeadCell>
                        <HeadCell width="600px">Nome</HeadCell>
                        <HeadCell width="200px">Quantidade</HeadCell>
                    </Line>
                </ProductsList>
            </ModalScreen>
        </Container>
    );
}

export default Modal;