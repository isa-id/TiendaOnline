import React from "react";
import './css/catalog.css'

export function CardProduct({ imgProd, titleProd, priceProd }) {
    return (
        <>
        <div className="container">
            <div className="img-hover">
                <img src={ imgProd } alt="" />
            </div>
            <div className="info-hover">
                <p className="title"> Vehiculo: { titleProd }</p>
                <p className="price"> Precio: $ { priceProd } </p>
            </div>
            <div className="button-hover">
                <button>Comprar</button>
            </div>
        </div>
        </>
    )
    
}

/* */