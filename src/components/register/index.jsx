import React from "react";
import {
    Container, DivTitle, Title, FieldContainer, FieldLabel,
    Field, DivFields, DivButtonForm, ButtonForm, Select, Option
} from './style';
import { fields } from '../../data/index';

const Register = ({ origin, title }) => {
    console.log(fields);
    // let allFields = JSON.parse(fields);
    return (
        <Container>
            <DivTitle>
                <Title>{title}</Title>
            </DivTitle>
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
            <DivButtonForm>
                <ButtonForm>Cadastrar</ButtonForm>
                <ButtonForm>Cancelar</ButtonForm>
            </DivButtonForm>
        </Container>
    );
}

export default Register;