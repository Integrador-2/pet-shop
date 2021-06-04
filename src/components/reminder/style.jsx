import styled from "styled-components";

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    background: var(--purple);
    width: ${px2vw(400)};
    height: ${px2vw(200)};
    box-shadow: ${px2vw(5)} ${px2vw(5)} ${px2vw(5)} #000;    
    margin: ${px2vw(15)};
    padding: ${px2vw(20)};

    &::-webkit-scrollbar {
        display: none;
    }
    &:hover {
        box-shadow: ${props => props.linkPage ? `${px2vw(2)} ${px2vw(2)} ${px2vw(2)} #000` : ''};
        cursor: pointer;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;      
`;

export const ReminderContainer = styled.div`
    margin-top: ${px2vw(10)};
    display: flex;   
    flex-direction: column; 
`;

export const TitleReminder = styled.h2`    
    font-size: ${props => props.linkPage ? '2rem' : '1.5rem'};
    margin: ${props => (props.linkPage ? px2vw(50) : '')} 0 0 0;
    width: ${px2vw(320)};
    transition: 0.2s;
`;

export const ImgReminder = styled.img`
    width: ${px2vw(50)};
    margin-top: ${props => props.linkPage ? px2vw(40) : ''};
    height: ${px2vw(50)};
`;

export const RemindersOfTheDay = styled.span`
    font-size: 1rem;
    margin: ${px2vw(2)};
`;