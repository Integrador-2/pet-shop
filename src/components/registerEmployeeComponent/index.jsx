import axios from "axios";
import React, { useContext, useState, useEffect } from "react";

import mainContext from "../../context/context";

import {
    Container, DivTitle, Title, FieldContainer, FieldLabel,
    Field, DivFields, DivButtonForm, ButtonForm, Select, Option,
    Image, FileInput, FileInputContainer, ImageContainer
} from './style';
import Modal from '../modal/index';
import Alert from '../alert/index';

const RegisterEmployeeComponent = ({ employee, title }) => {
    const {showAlert, showModal,
        setAlertConfig, alertConfig } = useContext(mainContext);
    const [doing, setDoing] = useState(employee ? 'edit' : 'insert');
    const [image, setImage] = useState('');
    const [waitingResponse, setWaitingResponse] = useState('');
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("Produto");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [employeeObject, setEmployeeObject] = useState();
    const [entityObject, setEntityObject] = useState();
    const [admissionDate, setAdmissionDate] = useState("");
    const [demissionDate, setDemissionDate] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [funct, setFunction] = useState("Normal");
    const [idEntity, setIdEntity] = useState("");

    useEffect(() => {
        if (alertConfig.response) {
            if (waitingResponse === 'image') {
                if (alertConfig.response === 'true') {
                    setImage('');
                }
            }
        }
    }, [alertConfig, waitingResponse]);

    useEffect(() => {
      if (employeeObject) {

        axios.post(`http://localhost/petshop/pet-shop/src/api/funcionarios/cadastrar`, {          
          dados: employeeObject        
        }).then((response) => {
            console.log(response);
        });
      }
    }, [employeeObject])

    useEffect(() => {
      if (employeeObject && doing === 'insert') {
        axios.post(`http://localhost/petshop/pet-shop/src/api/produtos/cadastrar`, {          
          dados: employeeObject        
        }).then((response) => {
            console.log(response);
        });
      } else {
        axios.post(`http://localhost/petshop/pet-shop/src/api/produtos/atualizar`, {          
          dados: employee        
        }).then((response) => {
            console.log(response);
        });
      }
    }, [employeeObject])

    useEffect(() => {
      if (entityObject) {

        axios.post(`http://localhost/petshop/pet-shop/src/api/entidades/cadastrar`, {          
          dados: entityObject        
        }).then((response) => {
            console.log(response);  
            setIdEntity(response.data.dados);  
            setEmployeeObject({   
                telefone: phoneNumber,
                usuario: user,
                senha: password,
                funcao_funcionario: funct,
                data_demissao: demissionDate,
                registro_entidade: idEntity 
            });        
        });
      }
    }, [entityObject])

    const handleInsert = () => {
      if (!name) {
        setAlertConfig({
          'type': 'alert',
          'title': 'N??o ?? poss??vel continuar',
          'text': 'Nome ?? obrigat??rio!',
          'show': 'flex'
        })
        return;
      }

      if (!birthDate) {
        setAlertConfig({
          'type': 'alert',
          'title': 'N??o ?? poss??vel continuar',
          'text': 'Data de Nascimento ?? obrigat??rio!',
          'show': 'flex'
        })
        return;
      }

      if (!address) {
        setAlertConfig({
          'type': 'alert',
          'title': 'N??o ?? poss??vel continuar',
          'text': 'Endere??o ?? obrigat??rio!',
          'show': 'flex'
        })
        return;
      }

      if (!phoneNumber) {
        setAlertConfig({
            'type': 'alert',
            'title': 'N??o ?? poss??vel continuar',
            'text': 'Telefone ?? obrigat??rio!',
            'show': 'flex'
          })
          return;
      }
      if (!admissionDate) {
        setAlertConfig({
            'type': 'alert',
            'title': 'N??o ?? poss??vel continuar',
            'text': 'Data de admiss??o ?? obrigat??rio!',
            'show': 'flex'
          })
          return;
      }      
      if (!user) {
        setAlertConfig({
            'type': 'alert',
            'title': 'N??o ?? poss??vel continuar',
            'text': 'Usu??rio ?? obrigat??rio!',
            'show': 'flex'
          })
          return;
      }      
      if (!password) {
        setAlertConfig({
            'type': 'alert',
            'title': 'N??o ?? poss??vel continuar',
            'text': 'Password ?? obrigat??rio!',
            'show': 'flex'
          })
          return;
      }  
      
      setEntityObject({
        nome: name,
        data_nascimento: birthDate,
        endereco: address,
        genero: gender,
      })
    }

    return (
          <Container>
              <Alert showAlert={showAlert} />
              <Modal showModal={showModal} />
              <DivTitle>
                  <Title>{title}</Title>
              </DivTitle>
              <DivFields columns="2">
                <FieldContainer>
                  <FieldLabel>Nome Completo:</FieldLabel>
                  <Field onChange={(e) => setName(e.target.value)} columns="2" type="text"/>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Data de Nascimento:</FieldLabel>
                  <Field onChange={(e) => setBirthDate(e.target.value)} columns="2" type="date"></Field>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Endere??o:</FieldLabel>
                  <Field onChange={(e) => setAddress(e.target.value)} columns="2" type="text"/>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>G??nero:</FieldLabel>
                  <Select columns="2" onChange={(e) => setGender(e.target.value)}>
                      <Option value="Masculino">Masculino</Option>
                      <Option value="Feminino">Feminino</Option>
                      <Option value="Outro">Outro</Option>
                  </Select>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Telefone:</FieldLabel>
                  <Field onChange={(e) => setPhoneNumber(e.target.value)} type="number"></Field>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Data de Admiss??o:</FieldLabel>
                  <Field onChange={(e) => setAdmissionDate(e.target.value)} type="date"></Field>
                </FieldContainer>                
                <FieldContainer>
                  <FieldLabel>Data de Demiss??o:</FieldLabel>
                  <Field onChange={(e) => setDemissionDate(e.target.value)} type="date"></Field>
                </FieldContainer>      
                <FieldContainer>
                  <FieldLabel>Usu??rio:</FieldLabel>
                  <Field onChange={(e) => setUser(e.target.value)} type="text"></Field>
                </FieldContainer>      
                <FieldContainer>
                  <FieldLabel>Senha:</FieldLabel>
                  <Field onChange={(e) => setPassword(e.target.value)} type="password"></Field>
                </FieldContainer>
                <FieldContainer>
                  <FieldLabel>Fun????o:</FieldLabel>
                  <Select columns="2" onChange={(e) => setFunction(e.target.value)}>
                      <Option value="Normal">Normal</Option>
                      <Option value="Admin">Administrador</Option>
                  </Select>
                </FieldContainer>                          
              </DivFields>
              <DivButtonForm>
                  <ButtonForm onClick={() => handleInsert()}>Cadastrar</ButtonForm>
                  <ButtonForm>Cancelar</ButtonForm>
              </DivButtonForm>
          </Container>
    );
}

export default RegisterEmployeeComponent;