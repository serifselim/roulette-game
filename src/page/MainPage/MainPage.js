import React, { useState, useEffect } from "react";

import { Amount, Header, History, Roll, Choice } from '../../components'
import { Main } from "./MainPage.styled";

function MainPage() {
    const [money, setMoney] = useState(100);
    const [amount, setAmount] = useState(0);
    const [choice, setChoice] = useState();

    const startGame = (choice) => {
        if(amount <= money){
            setChoice(choice);
            rollGame();
        }else {
            alert('You need to add more money !');
        }
    }

    const rollGame = () => {
        const gameResult = Math.floor(Math.random() * 15);
        if(gameResult <= 7){
            console.log('result' + gameResult);
            console.log('purple');
        }else if(gameResult >= 8 && gameResult < 14){
            console.log('result' + gameResult);
            console.log('red');
        }else{
            console.log('result' + gameResult);
            console.log('green');
        }
    }

    return (
        <>
            <Header />
            <Main>
                <History money={money} />
                <Roll />
                <Amount money={money} setAmount={setAmount} amount={amount} />
                <Choice startGame={(choice) => startGame(choice)} />
            </Main>
        </>
    );
}

export default MainPage;