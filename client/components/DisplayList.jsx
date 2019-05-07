import React from 'react'
import { connect } from 'react-redux'
import filteredCards from '../reducers/filteredCards';

class DisplayList extends React.Component {

    componentDidMount(){

    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.filteredCards.map((card, index) => <li key={index}>{card.name}</li>)}
                </ul>
                {/* <ul>
                    {this.props.listOfCards.map((card, index) => <li key={index}>{card.name}</li>)}
                </ul> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listOfCards: state.cards,
        filteredCards: state.filteredCards
    }
}
export default connect(mapStateToProps)(DisplayList)