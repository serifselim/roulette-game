import { MoneyContainer, MoneyIcon, MoneyText } from './Money.styled'

import coin from '../../assets/coin.svg'

function Money({ money }) {
    return (
        <MoneyContainer>
            <MoneyIcon src={coin} />
            <MoneyText>
                {money.toFixed(2)}
            </MoneyText>
        </MoneyContainer>
    )
}

export default Money
