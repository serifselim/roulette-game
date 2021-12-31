import styled from "styled-components";

export const AmountContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #17191F;
    border-radius: 1rem;
    padding: 1rem 3rem;
    margin-top: 2rem;
`;

export const AmountForm = styled.form`
    display: flex;
`;

export const AmountInput = styled.input`
    background-color: #0C0D10;
    padding: 1rem 1.5rem;
    border-radius: .5rem;
    border: none;
    color: #909090;
    font-weight: bold;

    &:focus{
        outline: none;
    }

    &::before{
        content: '';
        background-image: url('../../assets/coin.svg');
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

export const AmountTotal = styled.div`

`;

export const AmountTotalText = styled.h2`
    color: #0CE287;
    font-size: 2rem;
`;

export const Icon = styled.img`

`;