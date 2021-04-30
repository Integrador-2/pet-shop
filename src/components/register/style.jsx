import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
`;

export const DivTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 45px;

`;

export const Title = styled.span`
    font-size: 18pt;
`;

export const DivFields = styled.div`
    display: grid;
    grid-template-columns: 500px 500px;
    grid-template-rows: 100px 100px 100px 100px;
    justify-content: center;
    margin-top: 25px;
`;

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
`;

export const FieldLabel = styled.label`
    font-size: 15pt;
`;

export const Field = styled.input`
    width: 400px;
    height: 40px;
    border-radius: 20px;
    border-color: black;
`;

export const Select = styled.select`
    width: 400px;
    height: 40px;
    border-radius: 20px;
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
    width: 200px;
    height: 45px;
    border-radius: 35px;
    font-size: 15pt;
    background: var(--gradient);
    margin: 45px;

    &:hover {
        color: red;
        opacity: 0.8;
    }
`;

export const ContainerList = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 120px 120px 120px 400px;
`;

export const ProductsListContainer = styled.div`
    display: grid;
    grid-template-rows: 100px 200px;
    justify-content: center;
`;

export const ProductsListButtonsContainer = styled.div`
    display: flex;
    width: 1000px;
    justify-content: space-between;
`;

export const ProductListDiv = styled.div`
    margin-top: 15px;
    background: var(--purple);
    height: 200px;
    border: solid;
    border-collapse: collapse;
`;

export const ProductsList = styled.table`
    border-collapse: collapse;
    table-layout: fixed;
    margin: -2px;
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
`;

export const HeadCell = styled.th`
    border: solid;
    width: ${props => props.width};
`;
