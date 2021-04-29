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
    border-radius: 15px;
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
    margin-top: 30px;
    width: 30px;
    height: 30px;
    border-style: none;
    background: url("./confirme.svg");
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
`;