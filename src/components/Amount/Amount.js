import React from "react";
import { AmountContainer, AmountInput, AmountInputContainer, Button } from "./Amount.styled";

function Amount({ setAmount, amount, money, isRolling }) {

    const actionsList = ['Min', 'Max', '+1', '+10', '1/2', 'x2'];

    const handleChange = (e) => {
        const currentAmount = e.target.value;
        if (currentAmount > 0) {
            setAmount(prevState => prevState = currentAmount);
        }
    }

    const handleClick = (action) => {
        switch (action) {
            case 'Min':
                setAmount(prevState => prevState = 1);
                break;
            case 'Max':
                setAmount(prevState => prevState = money);
                break;
            case '+1':
                setAmount(prevState => prevState += 1);
                break;
            case '+10':
                setAmount(prevState => prevState += 10);
                break;
            case '1/2':
                setAmount(prevState => prevState /= 2);
                break;
            case 'x2':
                setAmount(prevState => prevState *= 2);
                break;
            default:
                break;
        }
    }

    const getActionButtons = actionsList.map((action, index) =>
        <Button disabled={isRolling} key={index} value={action} onClick={() => handleClick(action)}>{action}</Button>);

    return (
        <AmountContainer>
            <AmountInputContainer>
                <AmountInput readOnly={isRolling} value={amount ? amount : 'Enter Amount'} onChange={handleChange} placeholder="Enter Amount" type="number" />
            </AmountInputContainer>
            {getActionButtons}
        </AmountContainer>
    )
}

export default Amount;