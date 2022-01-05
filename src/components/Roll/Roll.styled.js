import styled from "styled-components";

export const RollContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #17191F;
    border-radius: 1rem;
    margin-top: 2rem;
`;

export const RollImage = styled.img`
    width: 10%;
    padding: 2rem 0;

    @media (max-width: 768px){
        width: 20%;
    }
    
`;