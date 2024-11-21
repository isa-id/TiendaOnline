import React from "react";
import './css/catalog.css'
import { CardProduct } from "./CardProduct";

let productos = [
    {   
        id: 1,
        imgProd: "https://m.media-amazon.com/images/I/71eTGq3CSqL.jpg",
        titleProd: "4 Puertas 4 oye",
        priceProd: 1200000
    },
    {   
        id: 2,
        imgProd: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Lightning_McQueen_9541_%284797197533%29.jpg/640px-Lightning_McQueen_9541_%284797197533%29.jpg",
        titleProd: "CARRO NUMERO 2 SE REVELO YA ES CARRO 5",
        priceProd: 3000000
    },
    {   
        id: 3,
        imgProd: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Lightning_McQueen_9541_%284797197533%29.jpg/640px-Lightning_McQueen_9541_%284797197533%29.jpg",
        titleProd: "VEHICULO NUMERO 3",
        priceProd: 9999999
    },
    {   
        id: 4,
        imgProd: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Lightning_McQueen_9541_%284797197533%29.jpg/640px-Lightning_McQueen_9541_%284797197533%29.jpg",
        titleProd: "ABUSO DE MOVILIDAD",
        priceProd: 86868686
    }
]


export function Products() {
    return (
        <>
        <section className="productsHover">
            {productos.map(({id, imgProd, titleProd, priceProd}) => (
                <CardProduct
                key={id}
                id = { id }
                imgProd = { imgProd }
                titleProd = { titleProd }
                priceProd = { priceProd }
                />
            ))}
        </section>
        </>
    )
    
}












// Arreglando error de subida de archivos al github



/* {
    productos.map(({ id, imgProd, titleProd, priceProd }) => (
        <CardProduct
        key={id}
        imgProd = { imgProd }
        titleProd = { titleProd }
        priceProd = { priceProd }
        />
))} */