import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  updateFilter = (selection) => {
    
    this.setState(() => {
      return {
        filters: {
          type: selection
        }
      }
    })
  }

  fetchAnimals = () => {
    
    const rootUrl = "/api/pets"
    let query = ""
    if (this.state.filters.type !== "all") {
      query = `?type=${this.state.filters.type}`
    }
    fetch(`${rootUrl}${query}`)
    .then(res => res.json())
    .then(obj => this.setState(() => {
      return {
        pets: obj
      }
    }))
  }

  
  adoptPet = (id) => {
    
    let updatedPets = this.state.pets.map(a => {
      var returnValue = {...a};
    
      if (a.id == id) {
        returnValue.isAdopted = true;
      }
    
      return returnValue
    })
    


    this.setState(() => {
      return {
        pets: updatedPets
      }
    })
  }



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.updateFilter} onFindPetsClick={this.fetchAnimals}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
