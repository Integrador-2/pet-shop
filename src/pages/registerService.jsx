import React from 'react';

import RegisterServiceComponent from '../components/registerServiceComponent';

const RegisterService = (props) => {
    return (
        <>
            <RegisterServiceComponent service={props.match.params.id} origin="service" title="Para cadastrar o serviço, preencha todos os campos" />
        </>
    );
}

export default RegisterService;