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
    position: relative;

    &::before{
        display: block;
        content: '';
        background-image: url(${coin});
        width: 2.2rem;
        top: 2;
        left: 2;
        position: absolute;
        height: 2.2rem;
    }

    @media (max-width: 768px){
        justify-content: space-between;
    }
`;

export const AmountInput = styled.input`
    background-color: #0C0D10;
    padding: 1rem 1.5rem;
    border-radius: .5rem;
    border: none;
    color: #909090;
    font-size: 1.9rem;
    text-align: center;
    font-weight: bold;

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
