import React from 'react';

import green from '../../assets/green.svg'
import red from '../../assets/red.svg'
import purple from '../../assets/purple.svg'
import { ChoiceContainer, ChoiceItem, ChoiceItemImage, } from './Choice.styled';

function Choice() {
    return (
        <ChoiceContainer>
            <ChoiceItem>
                <ChoiceItemImage src={red} />
            </ChoiceItem>
            <ChoiceItem>
                <ChoiceItemImage src={green} />
            </ChoiceItem>
            <ChoiceItem>
                <ChoiceItemImage src={purple} />
            </ChoiceItem>
        </ChoiceContainer>
    )
}

export default Choice;