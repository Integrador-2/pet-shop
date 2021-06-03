import styled from "styled-components";

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    background: var(--purple);
    width: ${px2vw(300)};
    height: ${px2vw(200)};
    box-shadow: ${px2vw(2)} ${px2vw(2)}  ${px2vw(2)} #000;
    overflow: scroll;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;  
`;

export const ReminderContainer = styled.div`
    display: flex;    
`;

export const TitleReminder = styled.h2`
    font-size: 1.5rem;
    width: ${px2vw(220)};    
`;

export const ImgReminder = styled.img`
    width: ${px2vw(50)};
    height: ${px2vw(50)};
`;

export const RemindersOfTheDay = styled.span`
    font-size: 1rem;
    margin: ${px2vw(2)};
`;