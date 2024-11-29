// Products.jsx
import React from "react";
import './css/catalog.css';
import { CardProduct } from "./CardProduct";
import { useNavigate } from 'react-router-dom';

let productos = [
    {   
        id: 1,
        imgProd: "https://hips.hearstapps.com/hmg-prod/images/gt4-rs-06-1637137843.jpg?crop=1xw:1xh;center,top&resize=980:*",
        titleProd: "Porsche 718 Cayman",
        priceProd: 710000
    },
    {   
        id: 2,
        imgProd: "https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-02-1636734552.jpg?crop=0.891xw:0.704xh;0.0289xw,0.172xh&resize=980:*",
        titleProd: "Ford Mustang Shelby GT500",
        priceProd: 550000
    },
    {   
        id: 3,
        imgProd: "https://hips.hearstapps.com/hmg-prod/images/10best-2022-chevrolet-corvette-urbano-101-1637104242.jpg?crop=0.422xw:0.316xh;0.299xw,0.395xh&resize=980:*",
        titleProd: "Chevrolet Corvette",
        priceProd: 990000
    },
    {   
        id: 4,
        imgProd: "https://hips.hearstapps.com/hmg-prod/images/p20-0586-a3-rgb-1610471756.jpg?crop=0.372xw:0.282xh;0.342xw,0.394xh&resize=980:*",
        titleProd: "Porsche 718 Boxster",
        priceProd: 1100000
    }
]

export function Products() {
    const navigate = useNavigate();

    const handleBuyClick = (id, imgProd, titleProd, priceProd) => {
        navigate(`/product/${id}`, {
            state: { imgProd, titleProd, priceProd }
        });
    };

    return (
        <>
        <h1 className="catalogTitle"> Catalogo de vehiculos deportivos</h1>
        <section className="productsHover">
            {productos.map(({id, imgProd, titleProd, priceProd}) => (
                <CardProduct
                    key={id}
                    id={id}
                    imgProd={imgProd}
                    titleProd={titleProd}
                    priceProd={priceProd}
                    handleBuyClick={handleBuyClick}
                />
            ))}
        </section>
        </>
    );
}
