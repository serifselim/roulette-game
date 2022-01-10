import styled from "styled-components";

import coin from '../../assets/coin.svg'

export const AmountContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #17191F;
    border-radius: 1rem;
    padding: 1rem 3rem;
    margin-top: 2rem;

    @media (max-width: 768px){
        justify-content: space-between;
    }
`;

export const AmountInputContainer = styled.div`
    position: relative;

    &::before{
        content: url(${coin});
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        width: 2.2rem;
        height: 2.2rem;
        opacity: .5;
    } 
`;

export const AmountInput = styled.input`
    background-color: #0C0D10;
    padding: 1rem 1.5rem;
    border-radius: .5rem;
    border: none;
    color: #909090;
    font-size: 1.7rem;
    font-weight: bold;
    -moz-appearance: textfield;
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &:focus{
        outline: none;
    }

    @media (max-width: 768px){
        width: 100%;
        margin-bottom: 2rem;
    }

`;
export const Button = styled.button`
    border-radius: .5rem;
    border: none;
    background-color: #1B1D25;
    color: #909090;
    margin: 0 1rem;
    padding: 1rem;
    position: relative;

    &:hover{
        background-color: #2D303D;
    }
    
`;
