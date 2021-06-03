import React, { useContext } from 'react';

import mainContext from "../../context/context";

import { Btn, Marked, Container, Img } from './style';


const ButtonMenu = ({ text, origin, marked, icon }) => {


    const { setActualPage } = useContext(mainContext);    

    const changePage = (page) => {
        setActualPage(page);
    }


    return (
        <Container>
            <Marked background={marked === origin ? 'yellow' : ''}/>   
            <Img src={icon}/>
            <Btn color={marked === origin ? 'red' : ''} onClick={() => { changePage(origin) }}>{text}</Btn>
        </Container>
    );
}

export default ButtonMenu;