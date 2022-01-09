import purple from '../../assets/purple.png'
import green from '../../assets/green.png'
import red from '../../assets/red.png'

import { HistoryContainer, HistoryContainerItem, HistoryTitle, HistoryList, HistoryItemImage, HistoryItemText, HistoryListItem, TotalIcon, TotalText, TotalContainerItem } from './History.styled';
import coin from '../../assets/coin.svg';

function History({ gameHistoryList, money }) {
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
                        <HistoryItemText>x3</HistoryItemText>
                        <HistoryItemImage src={purple}/>
                    </HistoryListItem>
                    
                    <HistoryListItem>
                        <HistoryItemText>x3</HistoryItemText>
                        <HistoryItemImage src={green}/>
                    </HistoryListItem>
                    
                    <HistoryListItem>
                        <HistoryItemText>x3</HistoryItemText>
                        <HistoryItemImage src={red}/>
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