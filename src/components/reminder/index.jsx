import React from "react";

import { Container, ImgReminder, RemindersOfTheDay, TitleReminder, ReminderContainer, TitleContainer } from "./style";

const Reminder = ({Title, Img, Reminders}) => {
    return(
        <Container>
            <TitleContainer>
                <TitleReminder>
                    {Title}
                </TitleReminder>
                <ImgReminder src={Img}/>                
            </TitleContainer>
            {Reminders && (
                <ReminderContainer>
                    {Reminders.map((item) => 
                        <RemindersOfTheDay>{item}</RemindersOfTheDay>
                    )}
                </ReminderContainer>
            )}
        </Container>
    )
}

export default Reminder;