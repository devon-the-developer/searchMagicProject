import React from 'react'

import {connect} from 'react-redux'
import { getMagicCards } from '../actions'
import { filterCards, saveCards } from '../actions'

class SearchBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchValue: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            searchValue: event.target.value
        })  

        if (event.target.value.length < this.state.searchValue.length) {
            this.props.dispatch(saveCards(this.props.cardList))
        }

        if (event.target.value.length > 2) {
            this.props.dispatch(filterCards(event.target.value))
            console.log(event.target.value)
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('Submit Not Finished')
        console.log(this.props.filteredCards)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="search" 
                        placeholder="Search Card Here..." 
                        autoComplete="off"
                        onChange={this.handleChange} 
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cardList: state.cards,
        filteredCards: state.filteredCards
    }
}

export default connect(mapStateToProps)(SearchBox)