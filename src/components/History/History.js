import purple from '../../assets/purple.png'
import green from '../../assets/green.png'
import red from '../../assets/red.png'

import { HistoryContainer, HistoryContainerItem, HistoryTitle, HistoryList, HistoryItemImage, HistoryListItem, TotalIcon, TotalText } from './History.styled';
import coin from '../../assets/coin.svg';

function History({ gameHistoryList, money }) {
    return (
        <HistoryContainer>
            <HistoryContainerItem>
                <HistoryTitle>
                    Last Rolls
                </HistoryTitle>

                <HistoryList>
                    {
                        gameHistoryList &&
                        gameHistoryList.map((game, index) => (
                            <HistoryListItem key={index}>
                                <HistoryItemImage alt={game.resultText} src={game.resultImage} />
                            </HistoryListItem>
                        ))
                    }
                </HistoryList>


            </HistoryContainerItem>

            <HistoryContainerItem>
                <TotalIcon src={coin} />
                <TotalText>
                    {money.toFixed(2)}
                </TotalText>
            </HistoryContainerItem>

        </HistoryContainer>
    );
}

export default History;