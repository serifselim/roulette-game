import React,{useState,useEffect} from "react";

import { Amount, Header, History, Roll, Choice } from '../../components'
import { Main } from "./MainPage.styled";

function MainPage() {
    const [money, setMoney] = useState(100);
    const [amount, setAmount] = useState(0);

    return (
        <>
            <Header />
            <Main>
                <History money={money} />
                <Roll/>
                <Amount money={money} setAmount={setAmount} amount={amount}/>
                <Choice/>
            </Main>
        </>
    );
}

export default MainPage;