import React from 'react';
import { RollContainer, RollImage } from './Roll.styled';

import green from '../../assets/green.png'

function Roll(){
    return(
        <RollContainer>
            <RollImage src={green}/>
        </RollContainer>
    )
}

export default Roll;