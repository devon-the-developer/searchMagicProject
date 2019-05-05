import React from 'react'

import {connect} from 'react-redux'
import { getMagicCards } from '../actions';

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
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getCards(this.state.searchValue)
        console.log('Submit Not Finished')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="search" 
                        placeholder="Search Card Here..." 
                        onChange={this.handleChange} 
                    />
                </form>
            </div>
        )
    }
}

// mapStateToProps = (state) => {
//     return null
// }

const mapDispatchToProps = (dispatch) => {
    return {
        getCards: (searchValue) => {
            dispatch(getMagicCards(searchValue))
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchBox)