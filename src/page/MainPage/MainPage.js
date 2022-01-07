import React, { useState, useEffect } from "react";

import { Amount, Header, History, Roll, Choice } from '../../components'
import { Main } from "./MainPage.styled";

function MainPage() {
    const [money, setMoney] = useState(100);
    const [amount, setAmount] = useState(0);
    const [choice, setChoice] = useState();

    const startGame = (choice) => {
        if (amount <= money) {
            setChoice(choice);
            console.log(rollGame());
        } else {
            alert('You need to add more money !');
        }
    }

    const rollGame = () => {
        let gameResult;
        const randomNumber = Math.floor(Math.random() * 15);

        if (randomNumber <= 6) gameResult = 'purple'
        else if (randomNumber >= 7 && randomNumber <= 13) gameResult = 'red'
        else gameResult = 'green'

        return gameResult;
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