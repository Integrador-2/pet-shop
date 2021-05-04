import styled from 'styled-components';

export const ProductListDiv = styled.div`
    margin-top: 15px;
    background: var(--purple);
    height: 200px;
    border: solid;
    border-collapse: collapse;
    overflow-y: scroll;
    overflow-x: hidden;
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