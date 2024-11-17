import React from 'react';
import './css/Card.css'

let mainData = []

export function CardContact({ solicitudValue, textareaValue, resetForm }) {
    const guardarData = () => {
        let idActual = mainData.length + 1;
        let data = {
            id: idActual,
            solicitud: solicitudValue,
            contenido: textareaValue
        };

        mainData = [...mainData, data];

        console.log("Nueva data añadida:", data);
        console.log(mainData);
        alert(`Se ha enviado exitosamente su ${solicitudValue}`);

        resetForm(); // Reiniciar el formulario después de enviar
    };

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
                    <button type="button" className="buttonCreate" onClick={guardarData}>
                        Enviar {solicitudValue}
                    </button>
                </div>
            </div>
        );
    }
}
