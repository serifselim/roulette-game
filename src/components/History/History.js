import purple from '../../assets/purple.png'
import green from '../../assets/green.png'
import red from '../../assets/red.png'

import { HistoryContainer, HistoryList, HistoryItemImage, HistoryItemText, HistoryListItem } from './History.styled';

function History({ gameHistoryData }) {
    return (
        <HistoryContainer>
            <HistoryList>
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
        </HistoryContainer>
    );
}

export default History;