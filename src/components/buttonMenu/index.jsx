import React, { useContext } from 'react';

import mainContext from "../../context/context";

import { Btn, Marked, Container, Img } from './style';


const ButtonMenu = ({ text, origin, marked, icon }) => {


    const { handleChangePage } = useContext(mainContext);    
    let pageWithoutBar = [];
    if (marked) {
        pageWithoutBar = marked.split("/");
    }
    const changePage = (page) => {
        handleChangePage(page);
    }


    return (
        <Container>
            <Marked background={marked === origin ? 'yellow' : ''}/>   
            <Img src={icon}/>
            <Btn color={pageWithoutBar[1] === origin ? 'red' : ''} onClick={() => { changePage(origin) }}>{text}</Btn>
        </Container>
    );
}

export default ButtonMenu;