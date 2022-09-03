import React from 'react';
import Header from "../header";
import MenuPrincipal from "../menuPrincipal";
import { PageDiv } from "./style";

const System = ({children}) => {
    return (
        <>
                <Header></Header>
                <MenuPrincipal></MenuPrincipal>
                <PageDiv>
                    {children}
                </PageDiv>
        </>

    );
}

export default System;