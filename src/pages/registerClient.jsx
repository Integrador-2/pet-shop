import React from 'react';

import RegisterClientComponent from '../components/registerClientComponent';

const RegisterClient = (props) => {
    return (
        <>
            <RegisterClientComponent client={props.match.params.id} title="Para cadastrar o cliente, preencha todos os campos" />
        </>
    );
}

export default RegisterClient;