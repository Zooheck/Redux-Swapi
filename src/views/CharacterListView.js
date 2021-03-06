import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacters, changePages } from '../actions/index'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters()
  }
  toggleNext = e => {
    e.preventDefault()
    this.props.changePages(this.props.next)
  }
  togglePrevious = e => {
    e.preventDefault()
    this.props.changePages(this.props.previous)
  }
  render() {
    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
      <p>Loading...</p>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
        <div>
          <button disabled={this.props.previous === null && true} onClick={this.togglePrevious}>Previous</button>
          <button onClick={this.toggleNext} disabled={this.props.next === null && true}>Next</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  characters: state.charsReducer.characters,
  isLoading: state.charsReducer.isLoading,
  error: state.charsReducer.error,
  previous: state.charsReducer.previous,
  next: state.charsReducer.next
})
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getCharacters,
    changePages
  }
)(CharacterListView);
