import { INCREMENT, DECREMENT } from './actions';

const initialState = {
    cards: []
};
export function cardReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            let newCard;
            newCard = [...state.cards, { ...action.payload}];
            console.log(state)
            return {
                ...state,  // Copia el resto del estado
                cards: newCard  // Reemplaza el array de productos
            };
            
        case DECREMENT:
            
        default:
            return state;
    }
}
