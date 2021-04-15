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
    grid-template-rows: 120px 120px 120px;
    justify-content: center;
    margin-top: 100px;
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
`;
