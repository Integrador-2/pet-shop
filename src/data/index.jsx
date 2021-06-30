export const fields = [{
    'origin': 'client',
    'label': 'Nome Completo:',
    'id': 'name_client',
    'type': 'input'
}, {
    'origin': 'client',
    'label': 'Data de Nascimento:',
    'id': 'birth_client',
    'type': 'date'
}, {
    'origin': 'client',
    'label': 'Endereço:',
    'id': 'address_client',
    'type': 'input'
},
{
    'origin': 'client',
    'label': 'Gênero:',
    'id': 'gender_client',
    'type': 'select',
    'options': [{
        'value': 'Masculino'
    },
    {
        'value': 'Feminino'
    }],
},
{
    'origin': 'client',
    'label': 'Telefone:',
    'id': 'phone_client',
    'type': 'input'
},

{
    'origin': 'employee',
    'label': 'Nome Completo:',
    'id': 'name_employee',
    'type': 'input'
},
{
    'origin': 'employee',
    'label': 'Data de Nascimento:',
    'id': 'birth_employee',
    'type': 'input'
},
{
    'origin': 'employee',
    'label': 'Endereço:',
    'id': 'address_employee',
    'type': 'input'
},
{
    'origin': 'employee',
    'label': 'Gênero:',
    'id': 'gender_employee',
    'type': 'select',
    'options': [{
        'value': 'Masculino'
    },
    {
        'value': 'Feminino'
    }],
},
{
    'origin': 'employee',
    'label': 'Telefone:',
    'id': 'phone_employee',
    'type': 'input'
},
{
    'origin': 'employee',
    'label': 'Data de Admissão:',
    'id': 'date_admission_employee',
    'type': 'date'
},

{
    'origin': 'product',
    'label': 'Nome do Item:',
    'id': 'name_product',
    'type': 'input'
},
{
    'origin': 'product',
    'label': 'Quantidade:',
    'id': 'quantity_product',
    'type': 'input'
},
{
    'origin': 'product',
    'label': 'Data de Lançamento:',
    'id': 'launch_date_product',
    'type': 'input'
},
{
    'origin': 'product',
    'label': 'Tipo:',
    'id': 'type_product',
    'type': 'input'
},
{
    'origin': 'product',
    'label': 'Preço:',
    'id': 'price_product',
    'type': 'input'
},
{
    'origin': 'product',
    'label': 'Imagem:',
    'id': 'image_product',
    'type': 'input'
}, {
    'origin': 'supplier',
    'label': 'Nome do Fornecedor:',
    'id': 'name_supplier',
    'type': 'input'
}, {
    'origin': 'supplier',
    'label': 'Entidade:',
    'id': 'entity_supplier',
    'type': 'select',
    'options': [
        { 'value': 'pet-shop' },
        { 'value': 'armazen' }
    ]
}, {
    'origin': 'supplier',
    'label': 'Endereço:',
    'id': 'address_supplier',
    'type': 'input'
}, {
    'origin': 'supplier',
    'label': 'Telefone:',
    'id': 'phone_supplier',
    'type': 'input'
}, {
    'origin': 'supplier',
    'label': 'E-mail:',
    'id': 'email_supplier',
    'type': 'input'
}, {

    'origin': 'service',
    'label': 'Assistente:',
    'id': 'assistant_service',
    'type': 'select',
    'options': [
        { 'value': 'Nenhum' },
        { 'value': 'Rafael Eduardo Kepler' }
    ]
}, {
    'origin': 'service',
    'label': 'Veterinário:',
    'id': 'vet_service',
    'type': 'select',
    'options': [
        { 'value': 'Nenhum' },
        { 'value': 'Rafael Eduardo Kepler' }
    ]
}, {
    'origin': 'service',
    'label': 'Descrição:',
    'id': 'description_service',
    'type': 'textarea'
}, {
    'origin': 'service',
    'label': 'Observações:',
    'id': 'obs_service',
    'type': 'textarea'
}, {
    'origin': 'service',
    'label': 'Valor Total:',
    'id': 'total_value_service',
    'type': 'input'
}, {
    'origin': 'service',
    'label': 'Forma de Pagamento:',
    'id': 'payment_service',
    'type': 'select',
    'options': [
        { 'value': 'Dinheiro' },
        { 'value': 'Cartão de Crédito' },
        { 'value': 'Pix' }
    ]
},{
    'origin': 'service',
    'label': 'Cliente:',
    'id': 'client_service',
    'type': 'select',
    'options': [
        { 'value': 'Rafael Eduardo Kepler' }
    ]
}, {
    'origin': 'service',
    'label': '',
    'id': '',
    'type': 'check'
},{
    'origin': 'service',
    'label': 'Data de Entrada do Animal:',
    'id': 'entry_date_service',
    'type': 'date',
    'checkDepends': 'true'
}, {
    'origin': 'service',
    'label': 'Data de Saída do Animal:',
    'id': 'departure_date_service',
    'type': 'date',
    'checkDepends': 'true'
},{
    'origin': 'service',
    'label': 'Data de agendamento:',
    'id': 'scheduling_date',
    'type': 'date',
    'checkDepends': 'true'
},{
    'origin': 'service',
    'label': 'Hora do agendamento:',
    'id': 'scheduling_hour',
    'type': 'time',
    'checkDepends': 'true'
},


{
    'origin': 'reversal',
    'label': 'Nº do Serviço:',
    'id': 'service_reversal',
    'type': 'select',
    'options': [
        { 'value': '1' },
        { 'value': '2' },
        { 'value': '3' }
    ]
}, {
    'origin': 'reversal',
    'label': 'Detalhes do Serviço:',
    'id': 'details_reversal',
    'type': 'textarea'
}, {
    'origin': 'reversal',
    'label': 'Motivo do estorno:',
    'id': 'reason_reversal',
    'type': 'textarea'
}, {
    'origin': 'report',
    'label': 'Busca',
    'id': 'search_report',
    'type': 'select',
    'options': [
        { 'value': 'Clientes' },
        { 'value': 'Funcionários' },
        { 'value': 'Produtos' },
        { 'value': 'Fornecedores' },
        { 'value': 'Vendas/Serviços' },
        { 'value': 'Estornos' }
    ]
}
];

export const TableColumns = [{
    'origin': 'reversal',
    'code': '1',
    'name': 'Estorno de Numero 0001',
}, {
    'origin': 'reversal',
    'code': '2',
    'name': 'Estorno de Numero 0002',
}, {
    'origin': 'reversal',
    'code': '3',
    'name': 'Estorno de Numero 0003',
}, {
    'origin': 'reversal',
    'code': '4',
    'name': 'Estorno de Numero 0004',
}
];


export const products = [{
    'type': 'product',
    'name': 'Ração Pedigree 1kg',
    'code': '1',
    'price': '10.00',
    'quantity': '20'
}, {
    'type': 'product',
    'name': 'Osso de borracha',
    'code': '2',
    'price': '15.00',
    'quantity': '3'
}, {
    'type': 'service',
    'name': 'Consulta',
    'code': '3',
    'price': '80.00',
    'quantity': '0'
}];


export const ListFields = [{
    'origin': 'client',
    'field': 'code',
    'title': 'Código',
    'width': '150',
}, {
    'origin': 'client',
    'field': 'name',
    'title': 'Nome',
    'width': '450'
}, {
    'origin': 'client',
    'field': 'phone',
    'title': 'Telefone',
    'width': '195'
}, {
    'origin': 'client',
    'field': 'gender',
    'title': 'Gênero',
    'width': '185'
},

{
    'origin': 'employee',
    'field': 'code',
    'title': 'Código',
    'width': '100'
}, {
    'origin': 'employee',
    'field': 'name',
    'title': 'Nome',
    'width': '500'
}, {
    'origin': 'employee',
    'field': 'phone',
    'title': 'Telefone',
    'width': '150'
}, {
    'origin': 'employee',
    'field': 'date_admission',
    'title': 'Admissão',
    'width': '115'
}, {
    'origin': 'employee',
    'field': 'active',
    'title': 'Ativo',
    'width': '115'
},

{
    'origin': 'product',
    'field': 'code',
    'title': 'Código',
    'width': '100',
    'dbname': 'id'
}, {
    'origin': 'product',
    'field': 'name',
    'title': 'Nome',
    'width': '500',
    'dbname': 'descricao'
}, {
    'origin': 'product',
    'field': 'sector',
    'title': 'Tipo',
    'width': '200',
    'dbname': 'tipo_produto'
}, {
    'origin': 'product',
    'field': 'price',
    'title': 'Preço',
    'width': '80',
    'dbname': 'preco'
}, {
    'origin': 'product',
    'field': 'quantity',
    'title': 'Estoque',
    'width': '100',
    'dbname': 'quantidade'
},

{
    'origin': 'supplier',
    'field': 'code',
    'title': 'Código',
    'width': '100'
}, {
    'origin': 'supplier',
    'field': 'name',
    'title': 'Nome',
    'width': '400'
}, {
    'origin': 'supplier',
    'field': 'entity',
    'title': 'Entidade',
    'width': '350'
}, {
    'origin': 'supplier',
    'field': 'phone',
    'title': 'Telefone',
    'width': '130'
},

{
    'origin': 'service',
    'field': 'code',
    'title': 'Código',
    'width': '100'
}, {
    'origin': 'service',
    'field': 'description',
    'title': 'Descrição',
    'width': '400'
}, {
    'origin': 'service',
    'field': 'entry_date',
    'title': 'Entrada',
    'width': '100'
}, {
    'origin': 'service',
    'field': 'leave_date',
    'title': 'Saída',
    'width': '100'
}, {
    'origin': 'service',
    'field': 'client',
    'title': 'Cliente',
    'width': '210'
}, {
    'origin': 'service',
    'field': 'total_value',
    'title': 'Valor',
    'width': '70'
}]

export const ListValues = [{
    'origin': 'client',
    'code': '1',
    'name': 'Cliente novato',
    'phone': '(55) 99108-2012',
    'gender': 'Masculino'
},
{
    'origin': 'client',
    'code': '2',
    'name': 'Cliente pleno',
    'phone': '(55) 99108-2005',
    'gender': 'Masculino'
}, {
    'origin': 'client',
    'code': '3',
    'name': 'Cliente senior',
    'phone': '(55) 99108-2017',
    'gender': 'Feminino'
},

{
    'origin': 'employee',
    'code': '1',
    'name': 'Funcionario novato',
    'phone': '(55) 99108-2012',
    'date_admission': '01/01/2021',
    'active': 'Sim'
},
{
    'origin': 'employee',
    'code': '2',
    'name': 'Funcionario pleno',
    'phone': '(55) 99108-2012',
    'date_admission': '01/02/2021',
    'active': 'Nao'
},
{
    'origin': 'employee',
    'code': '3',
    'name': 'Funcionario senior',
    'phone': '(55) 99108-2012',
    'date_admission': '01/03/2021',
    'active': 'Sim'
},

{
    'origin': 'product',
    'code': '1',
    'name': 'Produto novato',
    'sector': 'Comestiveis',
    'price': 'R$ 17,00',
    'quantity': '29'
},
{
    'origin': 'product',
    'code': '2',
    'name': 'Produto pleno',
    'sector': 'Brinquedo',
    'price': 'R$ 27,00',
    'quantity': '17'
},
{
    'origin': 'product',
    'code': '3',
    'name': 'Produto senior',
    'sector': 'Remedio',
    'price': 'R$ 117,00',
    'quantity': '7'
},

{
    'origin': 'supplier',
    'code': '1',
    'name': 'Fornecedor novato',
    'entity': 'Novatos Corp',
    'phone': '(55) 99108-2012'
},
{
    'origin': 'supplier',
    'code': '2',
    'name': 'Fornecedor pleno',
    'entity': 'Plenos Corp',
    'phone': '(55) 99108-2012'
},
{
    'origin': 'supplier',
    'code': '3',
    'name': 'Fornecedor senior',
    'entity': 'Senior Corp',
    'phone': '(55) 99108-2012'
},

{
    'origin': 'service',
    'code': '1',
    'description': 'Compra de racao',
    'entry_date': '--/--/--',
    'leave_date': '--/--/--',
    'client': 'Cliente novato',
    'total_value': 'R$ 170,00'
},
{
    'origin': 'service',
    'code': '2',
    'description': 'Compra de brinquedo',
    'entry_date': '--/--/--',
    'leave_date': '--/--/--',
    'client': 'Cliente pleno',
    'total_value': 'R$ 100,00'
},
{
    'origin': 'service',
    'code': '3',
    'description': 'Consulta cao doente',
    'entry_date': '01/03/2021',
    'leave_date': '03/03/2021',
    'client': 'Cliente senior',
    'total_value': 'R$ 80,00'
}]