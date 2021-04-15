import React from "react";
import { Container, DivTitle, Title, FieldContainer, FieldLabel, Field, DivFields, DivButtonForm, ButtonForm } from './style';
import {fields} from '../../data/index';

const Register = ({origin, title}) => {    
    console.log(fields);
    // let allFields = JSON.parse(fields);    
    return (
        <Container>
            <DivTitle>
                <Title>{title}</Title>
            </DivTitle>
            <DivFields>
                {
                    fields.map((item, index) => item.origin == origin &&
                        <FieldContainer>                            
                            <FieldLabel>{item.label}</FieldLabel>
                            <Field id={item.id}/>                                                    
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