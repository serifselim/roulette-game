import styled from "styled-components";

export const HistoryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #17191F;
    border-radius: 1rem;
    padding: .5rem 3rem;

    @media (max-width: 768px){
        flex-direction: column-reverse;
        align-items: center;
    }

`;

export const HistoryContainerItem = styled.div`
    display: flex;
    align-items: center;
`;

export const HistoryTitle = styled.h4`
    color: #909090;
    font-size: 1.6rem;
`;

export const HistoryList = styled.ul`
    display: flex;
    margin-left: 2rem;
`;

export const HistoryListItem = styled.li`
    list-style: none;
    padding: 1rem;
`;

export const HistoryItemImage = styled.img`
    width: 2rem;
`;

export const TotalIcon = styled.img`
    width: 2rem;
    margin-right: 1rem;
`;

export const TotalText = styled.h2`
    color: #0CE287;
    font-size: 2rem;
`;

