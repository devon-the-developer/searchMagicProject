import React from 'react'
import { connect } from 'react-redux'

import SearchBox from './SearchBox'
import { fetchMagicCards } from '../actions';
import DisplayList from './DisplayList';

class App extends React.Component {

  componentDidMount() {
    // console.log(this.props.cardList)
    this.props.dispatch(fetchMagicCards())
  }

  render() {
    return (
      <div className='app-container'>
        <SearchBox />
        <DisplayList />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cardList: state.cards
  }

}

export default connect(mapStateToProps)(App)
