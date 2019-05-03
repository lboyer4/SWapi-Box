import React, { Component } from 'react';
import './_App.scss';
import NavBar from '../NavBar/NavBar.js';
import CardContainer from '../CardContainer/CardContainer.js';
import Scroll from '../Scroll/Scroll.js';
import Buttons from '../Buttons/Buttons.js'
import { fetchCategories } from '../apiCalls/apiCalls.js';
import { fetchHomeWorld } from '../apiCalls/apiCalls.js';
import { fetchSpecies } from '../apiCalls/apiCalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets:[],
      vehicles:[]
    }
  }


   componentDidMount = () => {
    const ious = fetchCategories()
    const allPromises = Promise.all(ious)
    allPromises.then(data => {
      const people = data[0].results.map(person=> {
        const {name, homeworld, species} = person
        const newPerson = {name, id: Date.now()}
        fetchHomeWorld(homeworld)
          .then(homeworld => {
            newPerson.homeworld= homeworld.name; 
            newPerson.worldPopulation= homeworld.population;
          })
        fetchSpecies(species)
          .then(species=> {
            newPerson.species=species.name
          })
        return newPerson;
      })
      this.setState({ people });
    })   
  }


  render() {

    return(
      <main>
        <NavBar />
        <Buttons />
        {/*<Scroll />*/}
        <CardContainer people={this.state.people} />

      </main>
      )
  }
}


export default App;
