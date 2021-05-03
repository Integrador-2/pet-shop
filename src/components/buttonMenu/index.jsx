import React, { useContext } from 'react';

import mainContext from "../../context/context";

import { Btn } from './style';


const ButtonMenu = ({ text, origin }) => {

    const { setActualPage } = useContext(mainContext);

    const changePage = (page) => {
        setActualPage(page);
    }


    return (
        <Btn onClick={() => { changePage(origin) }}>{text}</Btn>
    );
}

export default ButtonMenu;