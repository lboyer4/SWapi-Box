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
      loading: true,
      people: [],
      planets:[],
      vehicles:[],
      favorites: [],
      category: ''
    }
  }

  componentDidMount = () => {
    const ious = fetchCategories();
    Promise.all(ious)
    .then(data => {
      this.makePeople(data[0].results)
    });
  }

  makePeople = (people) => {
    const result = people.map((person, index) => {
      return this.makePerson(person, index)
    })
    Promise.all(result)
    .then(people => {
      this.setState({ people })
    });
  }

  makePerson = (person, index) => {
    const {name, homeworld, species} = person;
    const newPerson = {name, id: (Date.now()+index)};
    const pendingPromises=[fetchHomeWorld(homeworld), fetchSpecies(species)];
    return Promise.all(pendingPromises)
    .then(promises => {
      newPerson.homeworld = promises[0].name; 
      newPerson.worldPopulation = promises[0].population;
      newPerson.species = promises[1].name; 
      return newPerson
    }); 
  }

  setCategory = (category) => {
    this.setState({category: category})
  }




  render() {
    const cardContainer= <CardContainer 
          things={this.state[this.state.category]}
         />
    const crawl = <Scroll />   
    let show = (this.state.category) ? cardContainer : crawl;

    return(
      <main>
        <NavBar />
        <Buttons 
          setCategory={this.setCategory} />
        {show}
      </main>
      )
  }
}


export default App;
