import React from "react";
import "./css/Nav.css"

export function Navbar() {
    return (
        <>
            <header className="Head">
                <div>
                    <h1 className="h1">Pegassi</h1>
                </div>
                <nav className="Nav">
                    <ul>
                        <li>Inicio</li>
                        <li>Catalogo</li>
                        <li>Contactanos</li>
                        <li>Informacion</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}