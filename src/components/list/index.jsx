import React from 'react';

import {
    Container, DivTitle, Title, FieldContainer, FieldLabel,
    Field, DivFields, Select, Option, ContainerList
} from '../register/style';

import { fields } from '../../data/index';

const List = ({ origin, title }) => {
    return (
        <Container>
            <DivTitle>
                <Title>{title}</Title>
            </DivTitle>
            <ContainerList>
                <DivFields>
                {
                    fields.map((item, index) => item.origin === origin &&
                        <FieldContainer>
                            <FieldLabel>{item.label}</FieldLabel>
                            {item.type !== 'select' ? (
                                <Field id={item.id} type={item.type} />
                            ) : (
                                    <Select id={item.id}>
                                        {item.options.map((value, key) =>
                                            <Option>{value.value}</Option>
                                        )}
                                    </Select>
                                )}
                        </FieldContainer>
                    )
                }
                </DivFields>
            </ContainerList>
        </Container>
    );
};

export default List;