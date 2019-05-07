import {combineReducers} from 'redux'
import cards from './cards'
import filteredCards from './filteredCards'

export default combineReducers({
    cards,
    filteredCards
})
