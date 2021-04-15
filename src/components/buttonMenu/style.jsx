import styled from 'styled-components';

export const Btn = styled.button`
    width: 140px;
    height: 65px;
    border-radius: 35px;
    font-size: 15pt;
    background: var(--gradient);
    margin-left: 45px;

    &:hover {
        color: red;
        opacity: 0.8;
    }
`;