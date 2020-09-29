import React from 'react'
import Axios from 'axios'

export default class SingleSpell extends React.Component {
  constructor() {
    super()
    this.state = {
      currentSpell: {}
    }
    this.fetchSingleSpell = this.fetchSingleSpell.bind(this)
  }

  componentDidMount() {
    this.fetchSingleSpell()
  }

  async fetchSingleSpell() {
    try {
      let url = 'https://www.dnd5eapi.co/api/spells/'
      let endOfUrl = this.props.match.params.spellIndex

      const response = await Axios.get(url + endOfUrl)

      if (response.data.Error) {
        this.setState({
          error: results.data.Error
        })
      } else {
        this.setState({
          error: ''
        })
        this.setState({
          currentSpell: response.data
        })
      }
    } catch (error) {
      console.log('You have an error', error)
    }
  }

  render() {
    console.log('data of spell', this.state.currentSpell)

    const spellDetails = this.state.currentSpell
    if (!spellDetails.name) {
      return <h1>Loading...</h1>
    }
    return (
      <div className="single-spell-container">
        <h1>{spellDetails.name}</h1>
        <p>Spell Level: {spellDetails.level}</p>
        <p>Casting Time: {spellDetails.casting_time}</p>
        <p>Damage: {spellDetails.damage.damage_at_slot_level[2]}</p>
        <p>Damage Type: {spellDetails.damage.damage_type.name}</p>
        <p>At Higher Levels: {spellDetails.higher_level[0]}</p>
        <p>Duration: {spellDetails.duration}</p>

        <p>Components: {spellDetails.components}</p>
        <p>Material: {spellDetails.material}</p>
        <p>Concentration: {spellDetails.concentration}</p>

        <p>Description: {spellDetails.desc}</p>
      </div>
    )
  }
}
