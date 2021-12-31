import React from "react";

import { Header, History, Roll } from '../../components'
import { Main } from "./MainPage.styled";

function MainPage() {
    return (
        <>
            <Header />
            <Main>
                <History />
                <Roll/>
            </Main>
        </>
    );
}

export default MainPage;