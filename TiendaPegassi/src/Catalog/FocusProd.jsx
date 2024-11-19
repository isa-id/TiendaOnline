import React from "react";
import { Navbar } from "../ComponentsHF/Nav";
import { Foot } from "../ComponentsHF/Footer";
import './css/Focus.css'

export function FocusProduct() {

    return(
        <>
        <Navbar/>
        <section className="componente-focus">
            <div className="imagen-hover">
                <img src="" alt="" />AAAAAAAAAAAAAAA
            </div>
            <div className="info-hover">
                <div className="info-content">
                    <h1 className="titulo-content">Titulo</h1>
                    <p className="precio-content">Precio</p>
                    <p className="desc-content"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis odit voluptate impedit distinctio unde dolorem modi voluptatibus dolores vitae velit esse tenetur accusantium quidem ab, eum suscipit, beatae obcaecati et. </p>
                    <p className="contact">Número de contacto: 312 691 12 61</p>
                    
                </div>
                <div className="Fbutton-hover">
                    <button>compre</button>
                </div>
            </div>
        </section>
        <Foot/>
        </>
    )
}