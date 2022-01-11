import styled from "styled-components";

export const ResetContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1.5rem;
`;

export const ResetButton = styled.button`
    background: #B19A00;
    border: none;
    border-radius: .7rem;
    color: #fff;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 1rem 2rem;

    @media (max-width: 768px) {
        font-size: 1.3rem;
        border-radius: .5rem;
    }
`;
