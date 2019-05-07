import { SAVE_CARDS } from "../actions";

const cards = (state = [], action) => {
    switch(action.type) {
        case SAVE_CARDS: 
        return action.cards
        default:
        return state
    }
}

export default cards