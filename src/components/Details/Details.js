import { useState, useEffect } from 'react';
import { DetailsContainer } from './Details.styled';
import { Result, History, Money } from '../../components';

function Details({ gameHistoryList, money, resultScreenData }) {

    const [gameHistoryData, setGameHistoryData] = useState({});

    useEffect(() => {
        calcEachColorCount(gameHistoryList);
    }, [gameHistoryList])

    const calcEachColorCount = (gameHistoryList) => {
        setGameHistoryData({
            purple: gameHistoryList.filter(game => game === 'purple').length,
            green: gameHistoryList.filter(game => game === 'green').length,
            red: gameHistoryList.filter(game => game === 'red').length
        });
    }

    return (
        <DetailsContainer>
            <Result
                resultScreenData={resultScreenData}
            />

            <History
                gameHistoryData={gameHistoryData}
            />

            <Money
                money={money}
            />
        </DetailsContainer>

    );
}

export default Details;