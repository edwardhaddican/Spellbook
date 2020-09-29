import React from 'react'
import {connect} from 'react-redux'

export default class NewCharacterForm extends React.Component {
  constructor() {
    super()
    this.state = {
      characterName: '',
      level: 1,
      class: '',
      strength: 8,
      dexterity: 8,
      constitution: 8,
      intelligence: 8,
      wisdom: 8,
      charisma: 8
    }
  }

  render() {
    return (
      <form className="form-container">
        <div className="form-inner-container">
          <div className="form-name-level-container">
            <div className="form-item">
              <label>Name</label>
              <input
                value={this.state.name}
                onChange={event => {
                  this.setState({
                    name: event.target.value
                  })
                }}
              />
            </div>
            <div className="form-item">
              <label>Level</label>
              <input
                value={this.state.level}
                onChange={event => {
                  this.setState({
                    level: event.target.value
                  })
                }}
              />
            </div>
            <div className="form-item">
              <label>Class</label>
              <input
                value={this.state.class}
                onChange={event => {
                  this.setState({
                    class: event.target.value
                  })
                }}
              />
            </div>
          </div>
          <div className="form-str-dex-con-container">
            <div className="form-item">
              <label>Strength</label>
              <input
                value={this.state.price}
                onChange={event => {
                  this.setState({
                    strength: event.target.value
                  })
                }}
              />
            </div>
            <div className="form-item">
              <label>Dexterity</label>
              <input
                value={this.state.dexterity}
                onChange={event => {
                  this.setState({
                    dexterity: event.target.value
                  })
                }}
              />
            </div>
            <div className="form-item">
              <label>Constitution</label>
              <input
                value={this.state.constitution}
                onChange={event => {
                  this.setState({
                    constitution: event.target.value
                  })
                }}
              />
            </div>
          </div>

          <div className="form-int-wis-cha-container">
            <div className="form-item">
              <label>Intelligence</label>
              <input
                value={this.state.intelligence}
                onChange={event => {
                  this.setState({
                    intelligence: event.target.value
                  })
                }}
              />
            </div>
            <div className="form-item">
              <label>Wisdom</label>
              <input
                value={this.state.wisdom}
                onChange={event => {
                  this.setState({
                    wisdom: event.target.value
                  })
                }}
              />
            </div>
            <div className="form-item">
              <label>Charisma</label>
              <input
                value={this.state.charisma}
                onChange={event => {
                  this.setState({
                    charisma: event.target.value
                  })
                }}
              />
            </div>
          </div>

          <div className="">
            <button
              className="button"
              type="submit"
              onClick={event => {
                event.preventDefault()
                this.props.createProduct(this.state)
                this.setState({
                  characterName: '',
                  level: 1,
                  class: '',
                  strength: 8,
                  dexterity: 8,
                  constitution: 8,
                  intelligence: 8,
                  wisdom: 8,
                  charisma: 8
                })
              }}
            >
              Create
            </button>
          </div>
        </div>
      </form>
    )
  }
}

// const mapDispatch = dispatch => {
//   return {
//     createCharacter: newCharacter => {
//       return dispatch(createCharacter(newCharacter))
//     }
//   }
// }

// export default connect(null, mapDispatch)(NewCharacterForm)
