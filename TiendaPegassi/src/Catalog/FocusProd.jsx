import React from "react";
import { Navbar } from "../ComponentsHF/Nav";
import { Foot } from "../ComponentsHF/Footer";
import './css/Focus.css'

export function FocusProduct() {

    return(
        <>
        <Navbar/>
        <section className="focusComponent">
            <div className="focusImagen">
                <img src="" alt="" />AAAAAAAAAAAAAAA
            </div>
            <div className="focusInfoHover">
                <div className="focusInfo">
                    <h1 className="focusTitle">Titulo</h1>
                    <p className="focusPrice">Precio</p>
                    <p className="focusContent"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis odit voluptate impedit distinctio unde dolorem modi voluptatibus dolores vitae velit esse tenetur accusantium quidem ab, eum suscipit, beatae obcaecati et. </p>
                    <p className="contact">Número de contacto: 312 691 12 61</p>
                    
                </div>
                <div className="focusButton">
                    <button>compre</button>
                </div>
            </div>
        </section>
        <Foot/>
        </>
    )
}