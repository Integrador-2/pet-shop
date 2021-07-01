import React from 'react';

import RegisterEmployeeComponent from '../components/registerEmployeeComponent';

const RegisterEmployee = (props) => {    
    return (
        <>
            <RegisterEmployeeComponent employee={props.match.params.id} title="Para cadastrar o funcionário, preencha todos os campos" />
        </>
    );
}

export default RegisterEmployee;