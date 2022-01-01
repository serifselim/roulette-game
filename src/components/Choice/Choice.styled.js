import styled from "styled-components";

export const ChoiceContainer = styled.div`
    display: flex;
    margin-top: 2rem;
`;

export const ChoiceButton = styled.button`
    background-color: ${props => props.buttonColor || '#0CE287'};
    width: 100%;
    border-radius: 1rem;
    padding: 1.5rem 0;
    border: none;
    font-size: 1.5rem;
    color: white;
    font-weight: bold;

    &:nth-child(2){
        margin: 0 2rem;
    }

    &:hover{
        opacity: .9;
    }
`;