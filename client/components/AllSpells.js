import React from 'react'
import Axios from 'axios'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'

export default class AllSpells extends React.Component {
  constructor() {
    super()
    this.state = {
      allSpells: [],
      error: '',
      classSpells: {},
      displayedSpells: [],
      currentClass: ''
    }
  }

  componentDidMount() {
    this.fetchAllSpells()
    this.getClassSpells()
  }

  async fetchAllSpells() {
    try {
      let url = 'https://www.dnd5eapi.co/api/spells'

      const response = await Axios.get(url)

      if (response.data.Error) {
        this.setState({
          error: results.data.Error
        })
      } else {
        this.setState({
          error: ''
        })
        this.setState({
          allSpells: response.data.results,
          displayedSpells: response.data.results
        })

        console.log('state', this.state.allSpells)
      }
    } catch (error) {
      console.log('You have an error', error)
    }
  }

  async getClassSpells() {
    try {
      let url = 'https://www.dnd5eapi.co'

      const response = await Axios.get(url + '/api/classes')

      const promises = response.data.results.map(element => {
        return Axios.get(`${url}${element.url}/spells`)
      })

      const classSpellResults = await Promise.all(promises)

      const classSpells = classSpellResults.reduce((result, element, index) => {
        const playerClass = response.data.results[index].index
        result[playerClass] = element.data.results
        return result
      }, {})

      this.setState({
        classSpells
      })
    } catch (error) {
      console.log('You have an error', error)
    }
  }

  render() {
    // console.log('class Spells', this.state.classSpells)
    return (
      <div>
        <h1>All Spells</h1>
        <SearchBar />
        <div>
          {this.state.allSpells.map(spell => {
            // console.log('eee', spell)
            return (
              <div key={spell.index}>
                <Link to={`/allSpells/${spell.index}`}>{spell.name}</Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
