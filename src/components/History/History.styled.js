import styled from "styled-components";

export const HistoryContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    background-color: #17191F;
    border-radius: 1rem;
    padding: 1.5rem 3rem;

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

export const TotalContainerItem = styled(HistoryContainerItem)`
    @media (max-width: 768px){
        margin-bottom: 1rem;
    }   
`;

export const TotalIcon = styled.img`
    width: 2.5rem;
    margin-right: 1.5rem;
`;

export const TotalText = styled.h2`
    color: #B19A00;
    font-size: 2.5rem;
`;

export const ResultScreenContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${props => props.bgColor || 'none'};
    border-radius: 1rem;
    z-index: 99;
`;

export const ResultScreenText = styled.h2`
    color: #fff;
    font-size: 2.5rem;
`


