import React from 'react'
import axios from 'axios'

class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {
      search: '',
      error: ''
    }
    this.fetchSpell = this.fetchSpell.bind(this)
    this.searchBarUpdate = this.searchBarUpdate.bind(this)
  }

  searchBarUpdate(event) {
    this.setState({
      search: event.target.value
    })
  }

  async fetchSpell(event) {
    event.preventDefault()
    try {
      let url = 'https://www.dnd5eapi.co/api/spells'

      if (this.state.search) {
        url = url + `/${this.state.search}`
      } else {
        return
      }

      if (this.state.search) {
        url = url + `&y=${this.state.year}`
      }

      const results = await axios.get(url)

      if (results.data.Error) {
        this.setState({
          error: results.data.Error
        })
      } else {
        this.setState({
          error: ''
        })
        this.props.updateSearchResults(results.data.Search)
      }
    } catch (error) {
      console.log('You have an error', error)
    }
  }

  render() {
    return (
      <div className="searchbar-container">
        <div>
          <h2>Spell</h2>
          {this.state.error ? (
            <h3 className="banner-container">{this.state.error}</h3>
          ) : null}
        </div>
        <div>
          <form
            onSubmit={this.fetchSpell}
            className="searchbar-inner-container"
          >
            <div className="title-searchbar input-group">
              <label>Spell:</label>
              <input
                value={this.state.search}
                required
                onChange={this.searchBarUpdate}
              />
            </div>
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchBar
