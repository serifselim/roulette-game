import { ResultScreenContainer, ResultScreenText } from './Result.styled'

function Result({ resultScreenData }) {
    return (
        <ResultScreenContainer bgColor={resultScreenData.resultScreenColor}>
            <ResultScreenText>
                {resultScreenData.resultScreenText}
            </ResultScreenText>
        </ResultScreenContainer>
    )
}

export default Result;