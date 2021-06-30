import React from 'react';

import RegisterEmployeeComponent from '../components/registerEmployeeComponent';

const RegisterEmployee = () => {
    console.log("entrou");
    return (
        <>
            <RegisterEmployeeComponent origin="employee" title="Para cadastrar o funcionário, preencha todos os campos" />
        </>
    );
}

export default RegisterEmployee;