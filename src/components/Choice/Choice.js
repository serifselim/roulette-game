import React from 'react';
import { ChoiceButton, ChoiceContainer } from './Choice.styled';

function Choice({ startGame,amount}) {

    const handleClick = (e) => {
        const yourChoice = e.target.value;
        startGame(yourChoice);
    }

    return (
        <ChoiceContainer>
            <ChoiceButton onClick={handleClick} value="purple" buttonColor="#5830CB">
                Purple Win 2x
            </ChoiceButton>

            <ChoiceButton onClick={handleClick} value="green">
                Green Win 14x
            </ChoiceButton>

            <ChoiceButton onClick={handleClick} value="red" buttonColor="#AC0000">
                Red Win 2x
            </ChoiceButton>
        </ChoiceContainer>
    )
}

export default Choice;
