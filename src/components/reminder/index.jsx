import React, { useContext } from "react";

import MainContext from "../../context/context";

import { Container, ImgReminder, RemindersOfTheDay, TitleReminder, ReminderContainer, TitleContainer } from "./style";

const Reminder = ({title, img, reminders, link}) => {
    const { setActualPage } = useContext(MainContext);

    return(
        <Container onClick={() => link ? setActualPage(link) : ''} linkPage={link ? link : ''}>
            <TitleContainer>
                <TitleReminder linkPage={link ? link : ''}>
                    {title}
                </TitleReminder>
                <ImgReminder linkPage={link ? link : ''} src={img}/>
            </TitleContainer>
            {reminders && (
                <ReminderContainer>
                    {reminders.map((item) => 
                        <RemindersOfTheDay>{item}</RemindersOfTheDay>
                    )}
                </ReminderContainer>
            )}
        </Container>
    )
}

export default Reminder;