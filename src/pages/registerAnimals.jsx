import React from 'react';

import RegisterAnimalComponent from '../components/registerAnimalComponent';

const RegisterAnimal = (props) => {

    return (
        <>
            <RegisterAnimalComponent client={props.match.params.id} title="Para cadastrar o produto, preencha todos os campos" />
        </>
    );
}

export default RegisterAnimal;