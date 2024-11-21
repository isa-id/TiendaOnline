import React from "react";
import './css/catalog.css'

export function CardProduct({ imgProd, titleProd, priceProd }) {
    return (
        <>
        <div className="cardContenedor">
            <div className="cardImagen">
                <img src={ imgProd } alt="" />
            </div>
            <div className="cardInfo">
                <p className="cardTitle"> Vehiculo: { titleProd }</p>
                <p className="cardPrice"> Precio: $ { priceProd } </p>
                <div className="cardButton">
                    <button>Comprar</button>
                </div>
            </div>
        </div>
        </>
    )
    
}

// Arreglando error de subida de archivos al github