import React from "react";

import { Amount, Header, History, Roll } from '../../components'
import Choice from "../../components/Choice/Choice";
import { Main } from "./MainPage.styled";

function MainPage() {
    return (
        <>
            <Header />
            <Main>
                <History />
                {/* <Roll/> */}
                <Choice/>
                <Amount/>
            </Main>
        </>
    );
}

export default MainPage;