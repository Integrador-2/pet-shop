import React from 'react';

import ListEmployeesComponent from '../components/listEmployeesComponent';

const ListEmployee = () => {
    return (
        <>
            <ListEmployeesComponent origin="employee" title="Lista de todos funcionários" />
        </>
    );
}

export default ListEmployee;