import purple from '../../assets/purple.png'
import green from '../../assets/green.png'
import red from '../../assets/red.png'

import { HistoryContainer, HistoryContainerItem, HistoryTitle, HistoryList, HistoryItemImage, HistoryListItem, TotalIcon, TotalText } from './History.styled';
import coin from '../../assets/coin.svg';

function History({money}){
    return(
        <HistoryContainer>
            <HistoryContainerItem>
                <HistoryTitle>
                    Last Rolls
                </HistoryTitle>

                <HistoryList>
                    <HistoryListItem>
                        <HistoryItemImage src={purple}/>
                    </HistoryListItem>
                    
                    <HistoryListItem>
                        <HistoryItemImage src={red}/>
                    </HistoryListItem>
                    
                    <HistoryListItem>
                        <HistoryItemImage src={green}/>
                    </HistoryListItem>
                    
                    <HistoryListItem>
                        <HistoryItemImage src={purple}/>
                    </HistoryListItem>
                </HistoryList>


            </HistoryContainerItem>

            <HistoryContainerItem>
                <TotalIcon src={coin}/>
                <TotalText>
                        {money}
                </TotalText>
            </HistoryContainerItem>

        </HistoryContainer>
    );
}

export default History;