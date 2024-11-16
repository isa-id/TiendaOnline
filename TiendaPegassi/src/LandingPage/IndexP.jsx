import React from "react";
import { Navbar } from '../ComponentsHF/Nav'
import { Foot } from '../ComponentsHF/Footer'
import { Banner } from "./Inf";


export function IndexP() {
    return(
        <>
        <Navbar/>
        <Banner/>
        <Foot/>
        </>
    )
}