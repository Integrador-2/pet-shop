import React, { useContext, useState, useEffect } from "react";
import produce from "immer";

import saleContext from "../../context/salesContext";

import { products } from '../../data/index';

import { Container, ModalScreen, FilterContainer, Filter, Label, Field, Button, Img } from './style';
import { ProductsList, HeadCell, Cell, Line } from '../register/style';

import Confirm from './confirme.svg';
import Exit from './exit.png';

const Modal = ({ showModal }) => {

    const { setShowModal, saleProducts, setSaleProducts, selectedProduct, operation } = useContext(saleContext);
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        if (operation === 'edit' && selectedProduct) {
            produce(saleProducts, draft => {
                draft.map((item) => {
                    if (item.code === selectedProduct) {
                        console.log('teste');
                        setCode(item.code);
                        setName(item.name);
                        setQuantity(item.quantity);
                    }
                })
            });
        }
    }, [selectedProduct, operation])

    const changeSalesProducts = () => {
        setSaleProducts(produce(saleProducts, draft => {
            let containSale = false;
            draft.map((item) => {
                if (item.code === code) {
                    item.quantity = setProductSaleQuantity(item.quantity, 'edit');
                    products.map((product) => {
                        if (product.code === code) {
                            containSale = true;
                            if (parseInt(product.quantity) < parseInt(item.quantity)) {
                                item.quantity = parseInt(item.quantity) - parseInt(quantity);
                                alert('A2quantidade atual do produto é: ' + product.quantity + ', que é menos que a quantidade solicitada.');
                                return;
                            }
                            clearStates();
                            setShowModal('none');
                        }
                    });
                }
            });
            if (containSale === false) {
                products.map((item) => {
                    if (item.code === code) {
                        const product = { ...item };
                        if (parseInt(quantity) > parseInt(product.quantity)) {
                            alert('A1 quantidade atual do produto é: ' + product.quantity + ', que é menos que a quantidade solicitada.');
                            return;
                        }
                        product.quantity = setProductSaleQuantity(product.quantity, 'insert');
                        product.price = parseFloat(product.price) * product.quantity;
                        console.log(product);
                        draft.push(product);
                        clearStates();
                        setShowModal('none');
                    }
                })
            }
        }));
    }

    const hideModal = () => {
        clearStates();
        setShowModal('none');
    }

    const clearStates = () => {
        setQuantity(0);
        setCode('');
        setName('');
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

    const setProductSaleQuantity = (actualQuantity, whatToDo) => {
        if (whatToDo === 'insert') {
            actualQuantity = parseInt(quantity);
        }
        if (whatToDo === 'edit') {
            actualQuantity = parseInt(actualQuantity) + parseInt(quantity);
        }
        return actualQuantity;
    }

    return (
        <Container display={showModal}>
            <ModalScreen>
                <FilterContainer>
                    <Filter width="100px">
                        <Label>Código</Label>
                        <Field onChange={(e) => setCode(e.currentTarget.value)} value={code} />
                    </Filter>
                    <Filter>
                        <Label>Nome</Label>
                        <Field onChange={(e) => setName(e.currentTarget.value)} value={name} />
                    </Filter>
                    <Filter width="100px">
                        <Label>Quantidade</Label>
                        <Field onChange={(e) => setQuantity(e.currentTarget.value)} value={quantity} />
                    </Filter>
                    <Button onClick={() => changeSalesProducts()}>
                        <Img src={Confirm} />
                    </Button>
                    <Button onClick={() => hideModal()}>
                        <Img padding="true" src={Exit} />
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
                                <Cell id={item.code}
                                    onClick={() => setProduct(item.code)}>
                                    {(parseFloat(item.price))
                                        .toLocaleString('pt-BR',
                                            { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}
                                </Cell>
                            </Line>
                        )}
                    </tbody>
                </ProductsList>
            </ModalScreen>
        </Container >
    );
}

export default Modal;