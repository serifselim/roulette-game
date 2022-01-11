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
    const [image, setImage] = useState();
    const [gameHistoryList, setGameHistoryList] = useState([]);
    const [resultScreenData, setResultScreenData] = useState({});

    useEffect(() => {
        const listData = JSON.parse(localStorage.getItem('gameHistoryList'));
        const moneyData = JSON.parse(localStorage.getItem('money'));

        if (listData) {
            setGameHistoryList(listData);
            setMoney(moneyData);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('money', JSON.stringify(money))
        localStorage.setItem('gameHistoryList', JSON.stringify(gameHistoryList))
    }, [gameHistoryList, money]);

    const startGame = (yourChoice) => {
        if (amount <= money && amount) {
            setIsRolling(true);

            setTimeout(() => {
                const gameResult = rollGame();
                resultControl(yourChoice, gameResult);
                setImage(setResultImage(gameResult));
                setGameHistoryList(prevState => [...prevState, gameResult]);
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
            setResultScreen(false);
        } else {
            if (yourChoice !== 'green') setMoney(prevState => prevState += 2 * amount);
            else setMoney(prevState => prevState += 14 * amount);
            setResultScreen(true);
        }
    }

    const setResultImage = (gameResult) => {
        if (gameResult === 'purple') return purple;
        else if (gameResult === 'red') return red;
        else return green;
    }

    const setResultScreen = (isWin) => {
        setResultScreenData({
            resultScreenText: isWin ? 'You Win !' : 'You Lost !',
            resultScreenColor: isWin ? '#B19A00' : '#9C0203'
        });

        setTimeout(() => {
            setResultScreenData({});
        }, 1000);
    }

    return (
        <>
            <Header />
            <Main>
                <History resultScreenData={resultScreenData} gameHistoryList={gameHistoryList} money={money} />
                <Roll image={image} isRolling={isRolling} />

                <Amount isRolling={isRolling} money={money} setAmount={setAmount} amount={amount} />
                <Choice isRolling={isRolling} startGame={(choice) => startGame(choice)} />
            </Main>
        </>
    );
}

export default MainPage;