import React from 'react'

import {connect} from 'react-redux'

class SearchBox extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Search Card Here..." />
            </div>
        )
    }
}

export default connect()(SearchBox)