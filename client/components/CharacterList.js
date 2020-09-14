import React from 'react'

export default class CharacterList extends React.Component {
  constructor() {
    super()
    this.state = {
      numberOfCharacters: 0
    }
  }

  render() {
    return (
      <div>
        <h1>Characters</h1>
        <p>Total Characters: {this.state.numberOfCharacters}</p>
      </div>
    )
  }
}
