import React, { useContext } from "react";

import mainContext from "../../context/context";

import { Img } from '../modal/style';
import { Modal, Button, ButtonContainer, TextContainer, InsideButton, ImageContainer, AlertContainer } from './style';

import Confirm from '../../assets/confirme.svg';
import Exit from '../../assets/exit.png';

const Alert = ({showAlert}) => {

    const {alertConfig, setAlertConfig} = useContext(mainContext);

    const confirmButton = () => {
        setAlertConfig({
            'type' : '',
            'title' : '',
            'text' : '',
            'show' : 'none'
          });
    }

    return (
        <AlertContainer display={alertConfig.show}>
            <Modal>
                <TextContainer>
                    <span><b>{alertConfig.title}</b></span>
                </TextContainer>
                <TextContainer>
                    <span>{alertConfig.text}</span>
                </TextContainer>                
                {alertConfig.type === 'confirm' &&
                    <ButtonContainer>
                        <Button onClick={() => confirmButton()}>
                            <InsideButton>
                                <ImageContainer>
                                    <Img src={Confirm} />                                    
                                </ImageContainer>
                                Confirmar
                            </InsideButton>
                        </Button>
                        <Button>
                            <InsideButton>
                                <ImageContainer>
                                    <Img src={Exit} />
                                </ImageContainer>
                                Cancelar
                            </InsideButton>
                        </Button>
                    </ButtonContainer>
                }                
                {alertConfig.type === 'alert' &&
                    <ButtonContainer>
                        <Button onClick={() => confirmButton()}>
                            <InsideButton>
                                <ImageContainer>
                                    <Img src={Confirm} /> 
                                </ImageContainer>
                                Confirmar
                            </InsideButton>
                        </Button>
                    </ButtonContainer>
                }
            </Modal>
        </AlertContainer>
    );
}

export default Alert;