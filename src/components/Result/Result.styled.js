import styled from "styled-components";

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
`;
