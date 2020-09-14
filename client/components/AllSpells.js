import React from 'react'
import Axios from 'axios'

export default class AllSpells extends React.Component {
  constructor() {
    super()
    this.state = {
      allSpells: '',
      error: ''
    }
  }
  //i want all the spells to just load to this page when you open up the page

  async fetchAllSpells(event) {
    event.preventDefault()
    try {
      let url = 'https://www.dnd5eapi.co/api/spells'

      const results = await Axios.get(url)

      if (results.data.Error) {
        this.setState({
          error: results.data.Error
        })
      } else {
        this.setState({
          error: ''
        })
        this.setState({
          allSpells: results
        })

        console.log('state', this.state.allSpells)
      }
    } catch (error) {
      console.log('You have an error', error)
    }
  }

  render() {
    return (
      <div>
        <h1>All Spells</h1>
      </div>
    )
  }
}
