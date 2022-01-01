import React from 'react';
import { ChoiceButton, ChoiceContainer } from './Choice.styled';

function Choice(){
    return (
        <ChoiceContainer>
            <ChoiceButton buttonColor="#5830CB">
                Purple Win 2x
            </ChoiceButton>
            
            <ChoiceButton>
                Green Win 14x
            </ChoiceButton>
            
            <ChoiceButton buttonColor="#AC0000">
                Red Win 2x
            </ChoiceButton>
        </ChoiceContainer>
    )
}

export default Choice;
