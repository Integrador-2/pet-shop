import styled from "styled-components";

import { Btn } from "../buttonMenu/style";

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    height: 100%;
    width: 75%;   
`;

export const DivTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${px2vw(100)};

`;

export const Title = styled.span`
    font-size: 18pt;
`;

export const DivFields = styled.div`
    display: grid;
    grid-template-columns: ${props => props.columns === 1 ? '64vw' : '30vw 30vw'};
    justify-content: center;
    margin-top: 25px;
`;

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin: 25px 0 0 ${px2vw(80)};
`;

export const FieldLabel = styled.label`
    font-size: 15pt;
`;

export const Field = styled.input`
    width: ${props => props.columns === 1 ? px2vw(1000) : px2vw(450)};
    height: ${px2vw(40)};    
    border-color: black;
`;

export const TextAreaField = styled(Field)`
    height: 80px;
    border-radius: 10px;
`;

export const Select = styled.select`
    width: ${props => props.columns === 1 ? px2vw(1000) : px2vw(450)};
    height: ${px2vw(40)};    
    border-color: black;
`;

export const Option = styled.option`
    border-radius: 20px;
`;

export const DivButtonForm = styled.div`
    display: flex;
    justify-content: center;
`;

export const ButtonForm = styled.button`
    width: ${px2vw(200)};
    height: ${px2vw(45)};
    border-radius: 35px;
    font-size: 15pt;
    background: var(--gradient);
    margin: ${px2vw(45)};

    &:hover {
        color: red;
        opacity: 0.8;
    }
`;

export const ContainerList = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: ${px2vw(120)} ${px2vw(120)} ${px2vw(120)} ${px2vw(400)};
`;

export const ProductsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    align-items: center;
`;

export const ProductsListButtonsContainer = styled.div`
    display: flex;
    width: ${px2vw(1000)};
    justify-content: space-evenly;
`;

export const ProductListDiv = styled.div`
    margin: ${px2vw(15)} 0 0 ${px2vw(30)};
    background: var(--purple);
    height: ${px2vw(200)};
    width: ${px2vw(990)};
    border: solid;
    border-collapse: collapse;
    overflow-y: scroll;
    overflow-x: hidden;
`;

export const ProductsList = styled.table`
    border-collapse: collapse;
    table-layout: fixed;
    margin: ${px2vw(-2)};
`;


export const Line = styled.tr`
    border: solid;
    background: ${props => props.selected ? "var(--green)" : "none"};

    & + tr:hover {
        background: var(--green);
    }

    &:hover {
        cursor: pointer;
    }
`;

export const Cell = styled.td`
    border: solid;
    padding-left: ${px2vw(15)};
`;

export const HeadCell = styled.th`
    border: solid;
    width: ${props => props.width};
`;

export const FileInputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FileInput = styled.input``;

export const Image = styled.img`
    width: ${px2vw(100)};
    height: ${px2vw(100)};
`;

export const ImageContainer = styled.div`
    width: ${px2vw(150)};
    height: ${px2vw(120)};
    border-radius: ${px2vw(15)};
    border-style: solid;
    border-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${px2vw(5)} 0 0 0;
`;

export const TableButton = styled(Btn)`
    width: ${px2vw(100)};
    height: ${px2vw(25)};
    display: flex;
    justify-content: center;
    margin: ${px2vw(2)};

    & label {
        font-size: 10pt;
    }
`;

export const CheckContainer = styled.div`
    display: flex;
    width: ${px2vw(1000)};
    margin-top: ${px2vw(30)};
`;

export const Check = styled.input`    
`;

export const CheckLabel = styled(FieldLabel)`
    margin-left: ${px2vw(30)};
`;