import React, { useContext } from "react";

import mainContext from "../../context/context";

import { Container } from '../modal/style';
import { Modal, Button, ButtonContainer, TextContainer } from './style';

const Alert = ({showAlert}) => {

    const {alertTitle, alertText, alertType, InsideButton} = useContext(mainContext);

    return (
        <Container display={showAlert}>
            <Modal>
                <TextContainer>
                    <span><b>{alertTitle}</b></span>
                </TextContainer>
                <TextContainer>
                    <span>{alertText}</span>
                </TextContainer>                
                {alertType === 'confirm' &&
                    <ButtonContainer>
                        <Button>
                            <InsideButton>
                                Confirmar
                            </InsideButton>
                        </Button>
                        <Button>
                            <InsideButton>
                                Cancelar
                            </InsideButton>
                        </Button>
                    </ButtonContainer>
                }                
                {alertType === 'alert' &&
                    <ButtonContainer>
                        <Button>
                            <InsideButton>
                                Confirmar
                            </InsideButton>
                        </Button>
                    </ButtonContainer>
                }
            </Modal>
        </Container>
    );
}

export default Alert;