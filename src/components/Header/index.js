import React from 'react';
import {HeaderBox,HeaderTitle, HeaderSpan} from './styles';

function Header(){
    return(
        <HeaderBox>
            <HeaderTitle>
                Roulette <HeaderSpan> Game</HeaderSpan>
            </HeaderTitle>
        </HeaderBox>
    )
}

export default Header;