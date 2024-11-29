import React from "react";
import "./css/Nav.css"
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
import { AppCatalog } from "../Catalog/AppCatalog";
import { IndexP } from "../LandingPage/IndexP";
import { AppContact } from "../Contact/AppContact";
import { AppInfo } from "../Information/appinfo";
import { FocusProduct } from "../Catalog/FocusProd";

export function Navbar() {
    return (
        <>
            <Router>
                <header className="Head">
                    <div>
                        <h1 className="h1">PEGASSI</h1>
                    </div>
                    <nav className="Nav">
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/catalog">Catalogo</Link></li>
                            <li><Link to="/contact">Contacto</Link></li>
                            <li><Link to="/information">Información</Link></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                        <Route path="/" element={<IndexP />} />
                        <Route path="/catalog" element={<AppCatalog />} />
                        <Route path="/contact" element={<AppContact />} />
                        <Route path="/information" element={<AppInfo />} />
                        <Route path="/product/:id" element={<FocusProduct />} />
                </Routes>
            </Router>
        </>
    )
}