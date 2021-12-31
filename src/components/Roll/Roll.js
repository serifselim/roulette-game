import React from 'react';
import { RollContainer, RollImage } from './Roll.styled';

import green from '../../assets/green.svg'

function Roll(){
    return(
        <RollContainer>
            <RollImage src={green}/>
        </RollContainer>
    )
}

export default Roll;