import React, { createContext, useContext } from "react";
import { Navbar } from "../ComponentsHF/Nav";
import { Foot } from "../ComponentsHF/Footer";
import { Formulario } from "./Form";
import './css/form.css'


export function AppContact() {
    return(
        <>
        <Navbar/>
        <h1 className="contactTitle">Sección de contacto</h1>
        <section className="compContact">
            <Formulario/>
        </section>
        <Foot/>
        </>
    )
}