import React, { useContext } from 'react';

import mainContext from "../../context/context";

import { Btn, Marked, Container } from './style';


const ButtonMenu = ({ text, origin, marked }) => {


    const { setActualPage } = useContext(mainContext);    

    const changePage = (page) => {
        setActualPage(page);
    }


    return (
        <Container>
            <Marked background={marked === origin ? 'yellow' : ''}/>
            <Btn color={marked === origin ? 'red' : ''} onClick={() => { changePage(origin) }}>{text}</Btn>
        </Container>
    );
}

export default ButtonMenu;