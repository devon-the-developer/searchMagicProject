import { getCards } from '../api/magiccards'

export const SAVE_CARDS = 'SAVE_CARDS'
export const FILTER_CARDS = 'FILTER_CARDS'

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

export function filterCards(searchValue) {
    console.log('FilterCards Action: ', searchValue)
    return {
        type: FILTER_CARDS,
        searchValue
    }
}