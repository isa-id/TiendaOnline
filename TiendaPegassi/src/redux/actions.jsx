/** 
 * Acciones: increment y decrement son acciones simples que describen 
 * un cambio en el estado. Cada acción tiene un type que indica qué 
 * tipo de cambio se está haciendo.
**/

// Definición de tipos de acciones
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

/**
 * Función para aumentar el contador
 * @returns {Object} Acción de tipo INCREMENT
 */
export const increment = (newCard) => ({
    type: INCREMENT,
    payload: newCard,
});

/**
 * Función para disminuir el contador
 * @returns {Object} Acción de tipo DECREMENT
 */
export const decrement = (id) => ({
    type: DECREMENT,
    payload: { id },
});