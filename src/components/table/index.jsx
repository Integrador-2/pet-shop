import React from "react";

import { ProductListDiv, ProductsList, Line, HeadCell, Cell } from './style';

const Table = ({ origin }) => {
    return (
        <ProductListDiv>
            <ProductsList>
                <tbody>
                    <Line>
                        <HeadCell width="200px">Código</HeadCell>
                        <HeadCell width="550px">Nome</HeadCell>
                        <HeadCell width="130px">Quantidade</HeadCell>
                        <HeadCell width="100px">Preço</HeadCell>
                    </Line>
                    {saleProducts.map((item, index) =>
                        <Line key={index} id={item.code} onClick={() => setProduct(item.code)} selected={(item.code === selectedProduct ? true : false)}>
                            <Cell id={item.code}>{item.code}</Cell>
                            <Cell id={item.code}>{item.name}</Cell>
                            <Cell id={item.code}>{item.quantity}</Cell>
                            <Cell id={item.code}
                                onClick={() => setProduct(item.code)}>
                                {(parseFloat(item.price))
                                    .toLocaleString('pt-BR',
                                        { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</Cell>
                        </Line>
                    )}
                </tbody>
            </ProductsList>
        </ProductListDiv>
    )
}

export default Table;