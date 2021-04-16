import React, { useContext } from 'react';

import pageContext from "../../context/context";

import { Btn } from './style';


const ButtonMenu = ({ text, origin }) => {

    const { setActualPage } = useContext(pageContext);

    const changePage = (page) => {
        setActualPage(page);
    }


    return (
        <Btn onClick={() => { changePage(origin) }}>{text}</Btn>
    );
}

export default ButtonMenu;