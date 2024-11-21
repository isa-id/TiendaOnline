import React, { createContext, useContext } from "react";
import { Navbar } from "../ComponentsHF/Nav";
import { Foot } from "../ComponentsHF/Footer";
import { Formulario } from "./Form";
import './css/form.css'
import { InfoContact } from "./InfoContact";

export function AppContact() {
    return(
        <>
        <h1 className="contactTitle">Información de contactos</h1>
        <InfoContact/>
        <h1 className="contactTitle">Sección de contacto</h1>
        <section className="compContact">
            <Formulario/>
        </section>
        </>
    )
}