import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin: ${px2vw(50)};
`;

export const Title = styled.h1`
    font-size: 2.5rem;    
    color: var(--text-color);
    margin-bottom: ${px2vw(40)};
    margin: ${px2vw(15)};
`;

export const SubTitle = styled.h2`
    font-size: 1.7rem;
    color: var(--text-color);
    margin-bottom: ${px2vw(15)};
    margin: ${px2vw(15)};
`;

export const ReminderContainer = styled.div`
    display: flex;    
    justify-content: space-between;
`;