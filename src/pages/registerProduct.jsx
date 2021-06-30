import React, {useState} from 'react';
import RegisterProductComponent from '../components/registerProductComponent';

const RegisterProduct = (props) => {    
    return (
        <>
            <RegisterProductComponent product={props.match.params.id} title="Para cadastrar o produto, preencha todos os campos" />
        </>
    );
}

export default RegisterProduct;