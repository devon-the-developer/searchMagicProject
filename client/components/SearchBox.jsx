import React from 'react'

import {connect} from 'react-redux'

class SearchBox extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchValue: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            searchValue: event.target.value
        })  
    }

    render() {
        return (
            <div>
                <input type="text" name="search" placeholder="Search Card Here..." onChange={this.handleChange} />
            </div>
        )
    }
}

export default connect()(SearchBox)