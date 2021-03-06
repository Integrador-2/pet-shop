import styled from "styled-components";

export const Container = styled.div`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1;
    overflow: auto;
    display: ${props => props.display};
    justify-content: center;
    background: var(--opacity);
`;

export const ModalScreen = styled.div`
    width: 50%;
    height: 50%;
    margin: auto;
    padding: 10px;
    z-index: 2;
    border-style: solid;
    background: var(--purple);
    display: flex;
    flex-direction: column;
    border-color: black;
`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
`;

export const Filter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin: 10px;
    width: ${props => props.width};
`;

export const Label = styled.label``;

export const Field = styled.input`
    border-radius: 15px;
    border-style: solid;
`;

export const Button = styled.button`
    border-radius: 20px;
    margin: 30px 0 0 5px;
    width: 30px;
    height: 30px;
    border-style: none;
    background: url("./confirme.svg");
`;

export const Img = styled.img`
    width: ${props => props.padding ? "105%" : "100%"};
    height: ${props => props.padding ? "105%" : "100%"};

    margin-top: ${props => props.padding ? "-1px" : "0"};
`;