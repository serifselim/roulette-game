import React from "react";

import { Header, History } from '../../components'
import { Main } from "./MainPage.styled";

function MainPage() {
    return (
        <>
            <Header />
            <Main>
                <History />
            </Main>
        </>
    );
}

export default MainPage;