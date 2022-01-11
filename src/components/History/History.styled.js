import styled from "styled-components";


export const HistoryContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const HistoryTitle = styled.h4`
    color: #909090;
    font-size: 1.6rem;
`;

export const HistoryList = styled.ul`
    display: flex;
`;

export const HistoryListItem = styled.li`
    display: flex;
    align-content: center;
    position: relative;
    list-style: none;
    padding: 1rem;
`;

export const HistoryItemImage = styled.img`
    width: 3rem;
    height: 3rem;
`;

export const HistoryItemText = styled.span`
    color: #e5e5e5;
    font-size: 2rem;
    font-weight: 600;
    margin-right: .4rem;
    position: absolute;
    bottom: 0;
    right: 0;
`;