import React from 'react';

import ListClientsComponent from '../components/listClientsComponent';

const ListClient = () => {
    return (
        <>
            <ListClientsComponent origin="client" title="Lista de todos clientes" />
        </>
    );
}

export default ListClient;