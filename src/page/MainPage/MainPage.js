import React from "react";

import { Amount, Header, History, Roll, Choice } from '../../components'
import { Main } from "./MainPage.styled";

function MainPage() {
    return (
        <>
            <Header />
            <Main>
                <History />
                <Roll/>
                <Amount/>
                <Choice/>
            </Main>
        </>
    );
}

export default MainPage;