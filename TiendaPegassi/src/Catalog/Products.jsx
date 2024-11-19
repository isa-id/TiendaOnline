import React from "react";
import './css/catalog.css'
import { CardProduct } from "./CardProduct";

let productos = [
    {   
        id: 1,
        imgProd: "https://telemedellin.tv/wp-content/uploads/2023/12/Carro1-1.jpg",
        titleProd: "4 Puertas 4 oye",
        priceProd: 1200000
    },
    {   
        id: 2,
        imgProd: "https://telemedellin.tv/wp-content/uploads/2023/12/Carro1-1.jpg",
        titleProd: "CARRO NUMERO 2 SE REVELO YA ES CARRO 5",
        priceProd: 3000000
    },
    {   
        id: 3,
        imgProd: "https://telemedellin.tv/wp-content/uploads/2023/12/Carro1-1.jpg",
        titleProd: "VEHICULO NUMERO 3",
        priceProd: 9999999
    },
    {   
        id: 4,
        imgProd: "https://telemedellin.tv/wp-content/uploads/2023/12/Carro1-1.jpg",
        titleProd: "ABUSO DE MOVILIDAD",
        priceProd: 86868686
    }
]


export function Products() {
    return (
        <>
        <section className="productsHover">
            
        </section>
        </>
    )
    
}
















/* {
    productos.map(({ id, imgProd, titleProd, priceProd }) => (
        <CardProduct
        key={id}
        imgProd = { imgProd }
        titleProd = { titleProd }
        priceProd = { priceProd }
        />
))} */