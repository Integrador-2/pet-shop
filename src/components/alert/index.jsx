import React, { useContext } from "react";

import mainContext from "../../context/context";

import { Img } from '../modal/style';
import { Modal, Button, ButtonContainer, TextContainer, InsideButton, ImageContainer, AlertContainer } from './style';

import Confirm from '../../assets/confirme.svg';
import Exit from '../../assets/exit.png';

const Alert = ({showAlert}) => {

    const {alertTitle, alertText, alertType, setShowAlert} = useContext(mainContext);

    const confirmButton = () => {
        setShowAlert('none');
    }

    return (
        <AlertContainer display={showAlert}>
            <Modal>
                <TextContainer>
                    <span><b>{alertTitle}</b></span>
                </TextContainer>
                <TextContainer>
                    <span>{alertText}</span>
                </TextContainer>                
                {alertType === 'confirm' &&
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
                {alertType === 'alert' &&
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