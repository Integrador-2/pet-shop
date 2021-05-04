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
    'origin': 'suplier',
    'label': 'Nome do Fornecedor:',
    'id': 'name_suplier',
    'type': 'input'
}, {
    'origin': 'suplier',
    'label': 'Entidade:',
    'id': 'entity_suplier',
    'type': 'select',
    'options': [
        { 'value': 'pet-shop' },
        { 'value': 'armazen' }
    ]
}, {
    'origin': 'suplier',
    'label': 'Endereço:',
    'id': 'address_suplier',
    'type': 'input'
}, {
    'origin': 'suplier',
    'label': 'Telefone:',
    'id': 'phone_suplier',
    'type': 'input'
}, {
    'origin': 'suplier',
    'label': 'E-mail:',
    'id': 'email_suplier',
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
}, {
    'origin': 'service',
    'label': 'Data de Entrada:',
    'id': 'entry_date_service',
    'type': 'date'
}, {
    'origin': 'service',
    'label': 'Data de Saída:',
    'id': 'departure_date_service',
    'type': 'date'
}, {
    'origin': 'service',
    'label': 'Data de Emissão:',
    'id': 'emission_date_service',
    'type': 'date'
}, {
    'origin': 'service',
    'label': 'Cliente:',
    'id': 'client_service',
    'type': 'select',
    'options': [
        { 'value': 'Rafael Eduardo Kepler' }
    ]
}, {
    'origin': 'service',
    'label': 'Imagem:',
    'id': 'image_service',
    'type': 'file'
}, {

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
    'origin': 'sales',
    'columns': [
        { 'value': 'Código' },
        { 'value': 'Nome' },
        { 'value': 'Quantidade' },
        { 'value': 'Preço' }
    ],
}, {
    'origin': 'report',
    'columns': [
        { 'value': 'Código' },
        { 'value': 'Nome' },
        { 'value': 'Detalhes' }
    ]
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