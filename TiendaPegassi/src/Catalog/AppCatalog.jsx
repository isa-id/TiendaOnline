import React from "react";
import { Products } from "./Products";
import { Navbar } from "../ComponentsHF/Nav";
import { Foot } from "../ComponentsHF/Footer";

export function AppCatalog() {

    return(
        <>
        
        <Navbar/>
        <Products/>
        <Foot/>
        </>
    )
}