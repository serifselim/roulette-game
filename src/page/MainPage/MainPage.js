import React from "react";

import { Amount, Header, History, Roll } from '../../components'
import { Main } from "./MainPage.styled";

function MainPage() {
    return (
        <>
            <Header />
            <Main>
                <History />
                <Roll/>
                <Amount/>
            </Main>
        </>
    );
}

export default MainPage;