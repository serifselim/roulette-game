import styled, { keyframes } from "styled-components";

export const RollContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #17191F;
    border-radius: 1rem;
    margin-top: 2rem;
    min-height: 20rem;

    
    @media (max-width: 768px){
        min-height: 15rem;
    }
`;

export const ResultImage = styled.img`
    width: 10%;
    padding: 3rem 0;

    @media (max-width: 768px){
        width: 20%;
    }
    
`;

const circleAnimation = keyframes`
     0% { transform: rotate(0deg) }
     100% { transform: rotate(360deg) }
`;

export const RollImage = styled(ResultImage)`
    width: 10%;
    padding: 2rem 0;
    animation-name: ${circleAnimation};
    animation-duration: 3s;
    animation-iteration-count: infinite;

    @media (max-width: 768px){
        width: 20%;
    }
    
`;

