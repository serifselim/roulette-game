import { useState, useEffect } from 'react';
import purple from '../../assets/purple.png'
import green from '../../assets/green.png'
import red from '../../assets/red.png'

import { HistoryContainer, HistoryContainerItem, HistoryTitle, HistoryList, HistoryItemImage, HistoryItemText, HistoryListItem, TotalIcon, TotalText, TotalContainerItem } from './History.styled';
import coin from '../../assets/coin.svg';

function History({ gameHistoryList, money }) {

    const [gameHistoryData, setGameHistoryData] = useState({});

    useEffect(() => {
        setGameHistoryData({
            purple: gameHistoryList.filter(game => game === 'purple').length,
            green: gameHistoryList.filter(game => game === 'green').length,
            red: gameHistoryList.filter(game => game === 'red').length
        });
    }, [gameHistoryList])

    return (
        <HistoryContainer>
            <HistoryContainerItem>
                <HistoryList>
                    {/* {
                        gameHistoryList &&
                        gameHistoryList.map((game, index) => (
                            <HistoryListItem key={index}>
                                <HistoryItemImage alt={game.resultText} src={game.resultImage} />
                            </HistoryListItem>
                        ))
                    } */}

                    <HistoryListItem>
                        <HistoryItemText>x{gameHistoryData.purple}</HistoryItemText>
                        <HistoryItemImage src={purple} />
                    </HistoryListItem>

                    <HistoryListItem>
                        <HistoryItemText>x{gameHistoryData.green}</HistoryItemText>
                        <HistoryItemImage src={green} />
                    </HistoryListItem>

                    <HistoryListItem>
                        <HistoryItemText>x{gameHistoryData.red}</HistoryItemText>
                        <HistoryItemImage src={red} />
                    </HistoryListItem>
                </HistoryList>


            </HistoryContainerItem>

            <TotalContainerItem>
                <TotalIcon src={coin} />
                <TotalText>
                    {money.toFixed(2)}
                </TotalText>
            </TotalContainerItem>

        </HistoryContainer>
    );
}

export default History;