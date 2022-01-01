import purple from '../../assets/purple.svg'
import green from '../../assets/green.svg'
import red from '../../assets/red.svg'

import { HistoryContainer, HistoryContainerItem, HistoryTitle, HistoryList, HistoryItemImage, HistoryListItem, TotalIcon, TotalText } from './History.styled';
import coin from '../../assets/coin.svg';

function History(){
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
                        30.57
                </TotalText>
            </HistoryContainerItem>

        </HistoryContainer>
    );
}

export default History;