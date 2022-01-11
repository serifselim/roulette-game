import styled from "styled-components";

export const DetailsContainer = styled.div`
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


