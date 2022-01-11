import {ResetContainer,ResetButton} from './Reset.styled';

function Reset({resetGame}){
    return(
        <ResetContainer>
            <ResetButton onClick={resetGame}>
                Reset Game
            </ResetButton>
        </ResetContainer>
    );
}

export default Reset;