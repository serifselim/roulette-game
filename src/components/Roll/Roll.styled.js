import styled, { keyframes } from "styled-components";

export const RollContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #17191F;
    border-radius: 1rem;
    margin-top: 2rem;
    padding: 1rem 0;
    min-height: 20rem;

    
    @media (max-width: 768px){
        min-height: 15rem;
    }
`;

export const ResultImage = styled.img`
    width: 10%;

    @media (max-width: 768px){
        width: 27%;
    }
    
`;

const circleAnimation = keyframes`
     0% { transform: rotate(0deg) }
     100% { transform: rotate(360deg) }
`;

export const RollImage = styled(ResultImage)`
    width: 10%;
    animation-name: ${circleAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;

    @media (max-width: 768px){
        width: 27%;
    }
    
`;

