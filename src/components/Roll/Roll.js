import React from 'react';
import { ResultImage, RollContainer, RollImage } from './Roll.styled';

import roll from '../../assets/roll.png'

function Roll({ isRolling, image }) {
    return (
        <RollContainer>
            {isRolling ?
                <RollImage src={roll} />
                :
                <ResultImage src={image} />
            }
        </RollContainer>
    )
}

export default Roll;