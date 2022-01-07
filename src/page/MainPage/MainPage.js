import React, { useState, useEffect } from "react";

import { Amount, Header, History, Roll, Choice } from '../../components'
import { Main } from "./MainPage.styled";

// İmages
import green from '../../assets/green.png'
import red from '../../assets/red.png'
import purple from '../../assets/purple.png'

function MainPage() {
    const [money, setMoney] = useState(100);
    const [amount, setAmount] = useState(0);
    const [isRolling, setIsRolling] = useState(false);
    const [result, setResult] = useState('');
    const [image, setImage] = useState(green);

    const startGame = (yourChoice) => {
        if (amount <= money && amount) {
            setIsRolling(true);

            setTimeout(() => {
                const resultChoice = rollGame();
                resultControl(yourChoice, resultChoice);
                setResult(resultChoice);
                setResultImage();
                setIsRolling(false);
            }, 2000);
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

    const resultControl = (yourChoice, resultChoice) => {
        if (yourChoice !== resultChoice) {
            setMoney(prevState => prevState -= amount);
            console.log('Kaybettin !' + yourChoice + resultChoice);
        } else {
            if (yourChoice !== 'green') {
                setMoney(prevState => prevState += 2 * amount)
            } else {
                setMoney(prevState => prevState += 14 * amount)
            }
        }
    }

    const setResultImage = () => {
        switch (result) {
            case 'red':
                setImage(red)
                break;
            case 'purple':
                setImage(red);
                break;
            default:
                setImage(green);
                break;
        }
    }

    return (
        <>
            <Header />
            <Main>
                <History money={money} />
                <Roll image={image} isRolling={isRolling}/>
                <Amount money={money} setAmount={setAmount} amount={amount} />
                <Choice startGame={(choice) => startGame(choice)} />
            </Main>
        </>
    );
}

export default MainPage;