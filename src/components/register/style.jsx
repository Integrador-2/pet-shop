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
    font-family: Verdana;
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
    font-family: Verdana;
    font-size: 15pt;
    color: grey;
`

export const Field = styled.input`
    width: 400px;
    border-radius: 20px;
    height: 40px;
    border-color: black;
`

export const DivButtonForm = styled.div`
    width: 500px;
    display: flex;    
    justify-content: center;
`;

export const ButtonForm = styled.button `
    width: 200px;
    height: 45px;
    border-radius: 35px;
    font-family: Verdana; 
    font-size: 15pt;
    background: linear-gradient(#9F84BC, #D9C8E2, #DCF1F9, #BCE5EF);
    color: black;
    margin-left: 65px;

    &:hover {
        pointer: click;
        
    }
`;
