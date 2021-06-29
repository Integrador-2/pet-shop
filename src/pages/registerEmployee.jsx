import React from 'react';

import Register from '../components/register';

const RegisterEmployee = () => {
    console.log("entrou");
    return (
        <>
            <Register origin="employee" title="Para cadastrar o funcionário, preencha todos os campos" />
        </>
    );
}

export default RegisterEmployee;