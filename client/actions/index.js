import { getCards } from '../api/magiccards'

export const SAVE_CARDS = 'SAVE_CARDS'

export const saveCards = (cards) => {
    return {
        type: SAVE_CARDS,
        cards
    }
}

export function fetchMagicCards() {
    return (dispatch) => {
        getCards()
        .then(cards => {
            dispatch(saveCards(cards))
        })
    }
}