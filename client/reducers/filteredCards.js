import { SAVE_CARDS, FILTER_CARDS} from '../actions/index'

const initialState = []

const filteredCards = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_CARDS:
        return action.cards
        case FILTER_CARDS:
        return state.filter(cards => cards.name.includes(action.searchValue))
        default:
        return state
    }
}

export default filteredCards