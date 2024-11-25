import React from 'react';
import './css/Card.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../redux/actions';

export function Lists() {
    const cards = useSelector(state => state.storeCards.cards);
    return (
        <>
            {cards.map(({id, solicitud, contenido}) => (
                <ListCards
                key={id}
                solicitudValue = { solicitud }
                textareaValue = { contenido }
                />
            ))}
        </>
    )

}

export function ListCards({ solicitudValue, textareaValue }) {
    if (!solicitudValue || !textareaValue) {
        return (
            <div className="compCard">
                <div className="headerCard">
                    <b className="titleCard">Carta de contacto</b>
                </div>
                <div className="cardHolder">
                    <p className="esperando">Esperando los datos...</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="compCard">
                <div className="headerCard">
                    <b className="titleCard">Carta de contacto</b>
                </div>

                <div className="cardHolder">
                    <b className="tipoSolicitud">Solicitud:</b>
                    <p className="solicitudValue">{solicitudValue}</p>
                    <b className="tipoSolicitud">Contenido</b>
                    <p className="solicitudValue">{textareaValue}</p>
                </div>
                <div className="buttonPlace">
                </div>
            </div>
        );
    }
}
