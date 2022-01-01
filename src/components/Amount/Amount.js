import React from "react";
import { AmountContainer, AmountForm, AmountInput, AmountTotal, AmountTotalText, Button, Icon } from "./Amount.styled";

function Amount() {
    return (
        <AmountContainer>
            <AmountForm>
                <AmountInput placeholder="Enter Amount" type="number"/>
                <Button>Min</Button>
                <Button>Max</Button>
                <Button>+1</Button>
                <Button>+10</Button>
                <Button>1/2</Button>
                <Button>x2</Button>
            </AmountForm>
        </AmountContainer>
    )
}

export default Amount;